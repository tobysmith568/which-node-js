import tobysmith568 from "@tobysmith568/eslint-config";
import eslintPluginAstro from "eslint-plugin-astro";

const eslintConfig = [
  ...tobysmith568.recommended,
  ...eslintPluginAstro.configs.recommended,
  { ignores: [".astro", "dist", "coverage", "playwright-report", "test-results"] }
];

export default eslintConfig;
