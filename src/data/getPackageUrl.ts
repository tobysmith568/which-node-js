/** Turns a `name@version` string (where the name may itself start with an `@` scope) into the URL of that version on npm */
export const getPackageUrl = (packageNameAndVersion: string) => {
  const indexOfLastAt = packageNameAndVersion.lastIndexOf("@");
  const packageName = packageNameAndVersion.substring(0, indexOfLastAt);
  const packageVersion = packageNameAndVersion.substring(indexOfLastAt + 1);

  return `https://www.npmjs.com/package/${packageName}/v/${packageVersion}`;
};
