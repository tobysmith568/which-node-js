import { defineConfig, devices } from "@playwright/test";

const isCi = !!process.env.CI;

export default defineConfig({
  testDir: "e2e",
  testMatch: "**/*.e2e.ts",
  fullyParallel: true,
  forbidOnly: isCi,
  reporter: isCi ? [["github"], ["html", { open: "never" }]] : "list",

  use: {
    baseURL: "http://localhost:3000/",
    viewport: { width: 1080, height: 1080 },
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure"
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1080, height: 1080 } }
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], viewport: { width: 1080, height: 1080 } }
    }
  ],

  webServer: {
    command: "bunx http-server ./out -p 3000 -s",
    url: "http://localhost:3000/",
    reuseExistingServer: !isCi
  }
});
