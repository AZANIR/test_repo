import { test } from '@playwright/test';
const path = require('path');

test('test', async ({ page }) => {
    // const filePathID = './upload/ID.jpg';
    await page.goto(
        'https://collection-dev.eu.ballerine.io/collection-flow?token=e8165dc5-b92f-4da1-8ad9-b4c2d6c813dd'
    );
    //await page.locator('[for="root_0_directors:passport-document"]+div [data-testid="file-uploader-field"]').click();
    await page
        .locator('[for="root_0_directors:passport-document"]+div [data-testid="file-uploader-field"]')
        .setInputFiles(path.join(__dirname, './upload/ID.jpg'));
    // await page.getByTestId('file-uploader-field').nth(1).click();
    // await page.getByTestId('file-uploader-field').nth(1).setInputFiles('Selfie_ID.png');
});
