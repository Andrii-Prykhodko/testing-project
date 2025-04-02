import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where tests are stored
  use: {
    headless: false, // Run browser with UI (not in headless mode)
    viewport: { width: 1280, height: 720 }, // Browser window size
    actionTimeout: 10_000, // Timeout for actions (10 seconds)
    baseURL: 'https://qatesting-wand-stg.cpe.gigmagic.io/en/', // Base URL of the test site
    httpCredentials: {
      username: 'qatesting',
      password: 'qatesting_gig',
    },
  },
});
