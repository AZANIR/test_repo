import { defineConfig } from '@playwright/test';
import { generateCustomLayoutAsync } from './my_custom_layout';
import { LogLevel } from '@slack/web-api';
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests/specs',
    /* Maximum time one test can run for. */
    timeout: 60 * 1000,
    //Global Setup to run before all tests
    globalSetup: './global-setup',
    //Global Teardown to run after all tests
    // globalTeardown: `./global-teardown`,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 5000
    },
    /* Run tests in files in parallel */
    //fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: 0,
    /* Opt out of parallel tests on CI. */
    workers: 1,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['junit', { outputFile: 'junit-report/jest-junit.xml' }],
        ['html', { open: 'never' }],
        ['allure-playwright'],
        ['list', { printSteps: true }],
        [
            'playwright-ctrf-json-reporter',
            {
                outputFile: 'ctrf-report.json', // Optional: Output file name. Defaults to 'ctrf-report.json'.
                // outputDir: 'custom-directory', // Optional: Output directory path. Defaults to '.' (project root).
                minimal: true, // Optional: Generate a minimal report. Defaults to 'false'. Overrides screenshot and testType when set to true
                screenshot: false, // Optional: Include screenshots in the report. Defaults to 'false'.
                testType: 'e2e', // Optional: Specify the test type (e.g., 'api', 'e2e'). Defaults to 'e2e'.
                appName: 'MyApp', // Optional: Specify the name of the application under test.
                appVersion: '1.0.0', // Optional: Specify the version of the application under test.
                osPlatform: 'linux', // Optional: Specify the OS platform.
                osRelease: '18.04', // Optional: Specify the OS release version.
                osVersion: '5.4.0', // Optional: Specify the OS version.
                buildName: 'MyApp Build', // Optional: Specify the build name.
                buildNumber: '100' // Optional: Specify the build number.
            }
        ],
        [
            './node_modules/playwright-slack-report/dist/src/SlackReporter.js',
            {
                channels: ['report'], // provide one or more Slack channels
                sendResults: 'always', // "always" , "on-failure", "off"
                layout: generateCustomLayoutAsync,
                maxNumberOfFailuresToShow: 40,
                meta: [
                    {
                        key: 'BUILD_NUMBER',
                        value: '0.0.11111'
                    },
                    {
                        key: 'WHATEVER_ENV_VARIABLE',
                        value: 'SOME_ENV_VARIABLE' // depending on your CI environment, this can be the branch name, build id, etc
                    },
                    {
                        key: 'HTML Results',
                        value: '<https://tests-allure-report.netlify.app/|📊>'
                    }
                ],
                slackOAuthToken: process.env.SLACK_BOT_USER_OAUTH_TOKEN,
                slackLogLevel: LogLevel.DEBUG,
                disableUnfurl: true,
                showInThread: true
            }
        ]
    ],
    // reporter: [
    //     ['list'],
    //     ['allure-playwright'],
    //     ['junit', { outputFile: 'junit-report/junit-report.xml' }],
    //     ['html', { open: 'never' }],
    //     [
    //         'playwright-qase-reporter',
    //         {
    //             mode: 'testops',
    //             apiToken: process.env.QASE_TOKEN,
    //             projectCode: 'TODO',
    //             runComplete: true,
    //             sendScreenshot: true,
    //             basePath: 'https://api.qase.io/v1',
    //             logging: true,
    //             uploadAttachments: true
    //         }
    //     ]
    // ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Maximum time to each action. */
        actionTimeout: 30 * 1000,
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: process.env.BASE_URL || 'http://localhost:5137',
        viewport: { width: 1440, height: 900 }, //1440 × 900,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: process.env.CI ? 'on-first-retry' : 'on',
        //screenshot: process.env.CI ? 'only-on-failure' : 'on',
        //video: process.env.CI ? 'retain-on-failure' : 'on'
        screenshot: {
            mode: 'only-on-failure',
            fullPage: true
        }
        /* Set the timezone for the browser context */
        //timezoneId: process.env.CI ? 'UTC' : process.env.TIMEZONE_ID || 'UTC',
        //headless: process.env.CI ? true : false
    },

    /* Configure projects for major browsers */
    projects: [
        // {
        //     name: 'setup',
        //     use: {
        //         headless: true
        //     },
        //     testMatch: 'auth.setup.spec.ts'
        // },
        // {
        //     name: 'Chrome',
        //     // dependencies: ['setup'],
        //     use: {
        //         storageState: './tests/auth/defaultStorageState.json',
        //         channel: 'chrome'
        //     }
        // },
        {
            name: 'Chrome',
            // dependencies: ['setup'],
            use: {
                // Configure the browser to use.
                browserName: 'chromium',

                //Chrome Browser Config
                channel: 'chrome',

                //Browser height and width
                // viewport: { width: 1920, height: 1080 },
                ignoreHTTPSErrors: true,
                screenshot: { mode: 'only-on-failure', fullPage: true },
                //Enable File Downloads in Chrome
                acceptDownloads: true,
                storageState: './tests/auth/defaultStorageState.json',

                //Slows down execution by ms
                launchOptions: {
                    args: [
                        // '--start-maximized',
                        '--disable-web-security',
                        '--no-sandbox',
                        '--disable-gpu',
                        '--disable-dev-shm-usage',
                        '--window-size=1440,980', // '--window-size=1900,1000',
                        '--allow-insecure-localhost',
                        '--ignore-certificate-error'
                    ],
                    slowMo: 100
                }
            }
        }
    ]

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
