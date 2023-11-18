const removeTestIds = process.env.REMOVE_TEST_IDS === "true";
console.log(removeTestIds ? "Removing TestIds" : "Not Removing TestIds");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: removeTestIds
  },
  output: "export"
};

module.exports = nextConfig;
