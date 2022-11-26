import { z } from "zod";
import { NodeJsVersion } from "./NodeJsVersion";

const dateSchema = z.preprocess(arg => {
  if (arg === null) return null;
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date().optional());

const versionNameValidator = z.string().min(1);

const versionDataValidator = z.object({
  start: dateSchema,
  lts: dateSchema.optional(),
  maintenance: dateSchema.optional(),
  end: dateSchema,
  codename: z.string().optional()
});

const responseValidator = z.record(versionNameValidator, versionDataValidator);

export const getVersions = async (): Promise<NodeJsVersion[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/nodejs/Release/main/schedule.json"
  );

  if (!response.ok) {
    throw new Error("Invalid response from GitHub");
  }

  const responseBody = await response.json();
  const parsedResponse = responseValidator.parse(responseBody);

  const versions: NodeJsVersion[] = [];

  for (const versionName in parsedResponse) {
    const { codename, start, lts, maintenance, end } = parsedResponse[versionName];
    versions.push(new NodeJsVersion(versionName, codename, start, lts, maintenance, end));
  }

  return versions;
};
