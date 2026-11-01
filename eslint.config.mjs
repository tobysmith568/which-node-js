import recommended from "@tobysmith568/eslint-config";
import astro from "@tobysmith568/eslint-config/astro";
import browser from "@tobysmith568/eslint-config/browser";
import node from "@tobysmith568/eslint-config/node";
import prettier from "@tobysmith568/eslint-config/prettier";
import test from "@tobysmith568/eslint-config/test";
import { defineConfig } from "eslint/config";

export default defineConfig([
  recommended,
  browser,
  node,
  { files: ["**/*.spec.ts"], extends: [test] },
  astro,
  prettier,
  { ignores: [".astro", "dist", "coverage", "playwright-report", "test-results"] }
]);
