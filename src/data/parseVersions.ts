import { z } from "zod";
import { NodeJsVersion } from "./NodeJsVersion";

const dateSchema = z.preprocess(arg => {
  if (arg === null) {
    return null;
  }

  if (typeof arg == "string" || arg instanceof Date) {
    return new Date(arg);
  }

  return undefined;
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

/** Validates the body of the Node.js release schedule, returning its versions in the same order they were given in */
export const parseVersions = (responseBody: unknown): NodeJsVersion[] => {
  const parsedResponse = responseValidator.parse(responseBody);

  return Object.entries(parsedResponse).map(([versionName, versionData]) => {
    const { codename, start, lts, maintenance, end } = versionData;
    return new NodeJsVersion(versionName, codename, start, lts, maintenance, end);
  });
};
