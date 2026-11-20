import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",

  fullyParallel: true,

  reporter: "html",

  use: {
    baseURL: "http://127.0.0.1:5173",

    trace: "on-first-retry",

    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",

      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  webServer: {
    command: "npm run dev -- --host 127.0.0.1",

    url: "http://127.0.0.1:5173",

    // eslint-disable-next-line no-undef
    reuseExistingServer: !process.env.CI,

    timeout: 30000,
  },
});
