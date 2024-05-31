import rimraf from 'rimraf';

/**
 * Performs global setup before running tests.
 * This function deletes the "allure-results" directory.
 * @returns A promise that resolves when the setup is complete.
 */
async function globalSetup(): Promise<void> {
    await new Promise((resolve) => {
        rimraf('./allure-results', resolve);
        rimraf('./allure-report', resolve);
        rimraf('./ctrf', resolve);
        rimraf('./junit-report', resolve);
        rimraf('./playwright-report', resolve);
        rimraf('./test-results', resolve);
    });
}
export default globalSetup;
