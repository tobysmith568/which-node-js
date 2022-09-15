import { z } from "zod";

const dateSchema = z.preprocess(arg => {
  if (arg === null) return null;
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date().optional());

const responseVersionsOnlyValidator = z.object({
  start: dateSchema,
  lts: dateSchema.optional(),
  maintenance: dateSchema.optional(),
  end: dateSchema
});
export type ResponseVersions = z.infer<typeof responseVersionsOnlyValidator>;

const responseVersionValidator = z.intersection(
  responseVersionsOnlyValidator,
  z.object({
    codename: z.string().optional()
  })
);
type ResponseVersion = z.infer<typeof responseVersionValidator>;

const versionValidator = z.string().min(1);
type Version = z.infer<typeof versionValidator>;

const responseValidator = z.record(versionValidator, responseVersionValidator);

export type NodeJsVersion = ResponseVersion & { version: Version };

export const getVersions = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/nodejs/Release/main/schedule.json"
  );

  if (!response.ok) {
    throw new Error("Invalid response from GitHub");
  }

  const data = await response.json();
  const dataObject = responseValidator.parse(data);

  const versions: NodeJsVersion[] = [];

  for (const version in dataObject) {
    if (!Object.prototype.hasOwnProperty.call(dataObject, version)) {
      continue;
    }

    versions.push({ version, ...dataObject[version] });
  }

  return versions;
};
