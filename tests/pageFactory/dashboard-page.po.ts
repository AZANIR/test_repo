import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page.po';
import { step } from '../source/step';
export class DashboardPage extends BasePage {
    private readonly lastName: Locator;
    private readonly firstName: Locator;
    private readonly email: Locator;
    private readonly phone: Locator;
    private readonly searchedElements: Locator;
    private readonly reUploadButton: Locator;
    private readonly reUploadModal: Locator;
    private readonly reUploadCommentInput: Locator;
    private readonly reUploadConfirmButton: Locator;
    private readonly assignButton: Locator;
    private readonly SelectFirstOption: Locator;
    private readonly askForReUploadButton: Locator;
    private readonly reUploadSendMailButton: Locator;
    private readonly rejectButton: Locator;
    private readonly rejectStatusLabel: Locator;

    constructor(page: Page) {
        super(page);
        this.rejectButton = this.page.locator('//button[text()="Reject"]');
        this.rejectStatusLabel = this.page.locator('//div[contains(@class,"text-destructive") and text()="Rejected"]');
        this.reUploadSendMailButton = this.page.locator('//div[@role="dialog"]//button[text()="Send email"]');
        this.askForReUploadButton = this.page.locator('//button[contains(text(),"Ask for all re-uploads")]');
        this.SelectFirstOption = this.page.locator('[role="menuitem"]').first();
        this.assignButton = this.page.locator('div#cases-list+div>div>div>button[id*="radix"]');
        this.reUploadConfirmButton = this.page.locator('//div[@role="dialog"]//button[text()="Confirm"]');
        this.reUploadCommentInput = this.page.locator('div[role="dialog"] input#comment');
        this.reUploadModal = this.page.locator('div[role="dialog"]');
        this.reUploadButton = this.page.locator('//button[text()="Re-upload needed"]');
        this.lastName = this.page.locator(
            '//legend[contains(text(), "Individual Information")]/following-sibling::div//label[contains(text(), "Last Name")]/following-sibling::div'
        );
        this.firstName = this.page.locator(
            '//legend[contains(text(), "Individual Information")]/following-sibling::div//label[contains(text(), "First Name")]/following-sibling::div'
        );
        this.email = this.page.locator(
            '//legend[contains(text(), "Individual Information")]/following-sibling::div//label[contains(text(), "Email")]/following-sibling::div'
        );
        this.phone = this.page.locator(
            '//legend[contains(text(), "Individual Information")]/following-sibling::div//label[contains(text(), "Phone")]/following-sibling::div'
        );
        this.searchedElements = this.page.locator('div[dir="ltr"] ul>li>a');
    }

    /**
     * Checks if the specified data with legend is displayed on the page.
     *
     * @param legend - The legend of the data, which can be one of the following:
     *   - 'Business Information'
     *   - 'Banking details'
     *   - 'Store Info'
     *   - 'Processing details'
     *   - 'Website Basic Requirement'
     * @param innerText - The inner text of the data to check for.
     * @returns A promise that resolves to a boolean indicating whether the data with legend is displayed.
     */
    @step()
    public async isDataWithLegendDisplayed(
        legend:
            | 'Business Information'
            | 'Banking details'
            | 'Store Info'
            | 'Processing details'
            | 'Website Basic Requirement',
        innerText: string
    ): Promise<boolean> {
        const element = this.page.locator(
            `//h2[text()="${legend}"]/../..//form//div[@role="textbox" and @aria-readonly="true" and text()="${innerText}"]`
        );
        await element.scrollIntoViewIfNeeded();
        return await element.isVisible();
    }

    /**
     * Checks if a link with the specified legend and inner text is displayed.
     *
     * @param legend - The legend of the link. Possible values are:
     *   - 'Business Information'
     *   - 'Banking details'
     *   - 'Store Info'
     *   - 'Processing details'
     *   - 'Website Basic Requirement'
     * @param innerText - The inner text of the link.
     * @returns A promise that resolves to a boolean indicating whether the link is displayed.
     */
    @step()
    public async isLinkWithLegendDisplayed(
        legend:
            | 'Business Information'
            | 'Banking details'
            | 'Store Info'
            | 'Processing details'
            | 'Website Basic Requirement',
        innerText: string
    ): Promise<boolean> {
        return this.page
            .locator(`//h2[text()="${legend}"]/../..//form//a[@target="_blank" and text()="${innerText}"]`)
            .isVisible();
    }

    /**
     * Clicks on a specific tab in the dashboard page.
     *
     * @param tab - The tab to click on. Possible values are:
     *   - 'summary'
     *   - 'company_information'
     *   - 'store_info'
     *   - 'documents'
     *   - 'ubos'
     *   - 'associated_companies'
     *   - 'directors'
     *   - 'website_monitoring'
     *
     * @returns A promise that resolves when the tab is clicked.
     */
    @step()
    public async clickTab(
        tab:
            | 'summary'
            | 'company_information'
            | 'store_info'
            | 'documents'
            | 'ubos'
            | 'associated_companies'
            | 'directors'
            | 'website_monitoring'
    ): Promise<void> {
        await this.page.locator(`[id$="trigger-${tab}"]`).hover();
        await this.page.click(`[id$="trigger-${tab}"]`);
        await this.page.waitForTimeout(1000);
        await this.page.mouse.move(100, 200);
    }

    /**
     * Clicks on the reject button.
     * @returns A promise that resolves when the button is clicked.
     */
    @step()
    public async clickRejectButton(): Promise<void> {
        await this.rejectButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Checks if the rejected status is visible.
     * @returns A promise that resolves to a boolean indicating whether the rejected status is visible.
     */
    @step()
    public async isRejectedStatusVisible(): Promise<boolean> {
        return this.rejectStatusLabel.isVisible();
    }

    /**
     * Clicks on the send email button.
     * @returns A promise that resolves when the button is clicked.
     */
    @step()
    public async clickSendEmailButton(): Promise<void> {
        await this.reUploadSendMailButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Clicks on the ask for re-upload button.
     * @returns A promise that resolves when the button is clicked.
     */
    @step()
    public async clickAskForReUploadButton(): Promise<void> {
        await this.askForReUploadButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Clicks on the assign button.
     * @returns A promise that resolves when the button is clicked.
     */
    @step()
    public async assignToFirstUser(): Promise<void> {
        await this.assignButton.click();
        await this.SelectFirstOption.click();
        await this.page.waitForTimeout(1000);
    }

    /**
     * Checks if the re-upload modal is visible.
     * @returns A promise that resolves to a boolean indicating whether the modal is visible or not.
     */
    @step()
    public async isReUploadModalVisible(): Promise<boolean> {
        return this.reUploadModal.isVisible();
    }

    /**
     * Enters the re-upload comment.
     * @param comment - The comment to enter.
     * @returns A promise that resolves when the comment is entered.
     */
    @step()
    public async enterReUploadComment(comment: string): Promise<void> {
        await this.reUploadCommentInput.fill(comment);
    }

    /**
     * Clicks on the re-upload confirm button.
     * @returns A promise that resolves when the button is clicked.
     */
    @step()
    public async clickReUploadConfirmButton(): Promise<void> {
        await this.reUploadConfirmButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Clicks on the re-upload button.
     * @returns A promise that resolves when the button is clicked.
     */
    @step()
    public async clickReUploadButton(): Promise<void> {
        await this.reUploadButton.first().click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Clicks on a side menu button.
     * @param buttonName - The name of the button to click.
     * @returns A promise that resolves when the button is clicked.
     */
    @step()
    public async clickSideMenuButton(buttonName: string): Promise<void> {
        await this.page.getByRole('button', { name: buttonName }).click();
    }

    /**
     * Clicks on a link menu button with the specified name.
     *
     * @param linkName - The name of the link menu button to click.
     * @returns A promise that resolves once the button is clicked.
     */
    @step()
    public async clickSideMenuLink(linkName: string): Promise<void> {
        await this.page.getByRole('link', { name: linkName, exact: true }).click();
    }

    /**
     * Checks if the side menu link is active.
     * @param linkName - The name of the link to check.
     * @returns A promise that resolves to a boolean indicating whether the link is active or not.
     */
    @step()
    public async isSideMenuLinkActive(linkName: string): Promise<boolean> {
        return this.page
            .getByRole('link', { name: linkName, exact: true })
            .evaluate((el) => !el.classList.contains('aria-[current=page]'));
    }

    /**
     * Retrieves the last name from the page.
     * @returns A promise that resolves to a string representing the last name.
     */
    @step()
    public async getLastName(): Promise<string> {
        return this.lastName.innerText();
    }

    /**
     * Retrieves the first name from the page.
     * @returns A promise that resolves to a string representing the first name.
     */
    @step()
    public async getFirstName(): Promise<string> {
        return this.firstName.innerText();
    }

    /**
     * Retrieves the email from the page.
     * @returns A promise that resolves to the email as a string.
     */
    @step()
    public async getEmail(): Promise<string> {
        return this.email.innerText();
    }

    /**
     * Retrieves the phone number from the page.
     * @returns A promise that resolves to a string representing the phone number.
     */
    @step()
    public async getPhone(): Promise<string> {
        return this.phone.innerText();
    }

    /**
     * Clicks on the searched element.
     * Waits for the element to be visible before clicking.
     */
    @step()
    public async clickSearchedElement(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.searchedElements.first().waitFor({ state: 'visible' });
        await this.searchedElements.first().click();
        await this.page.waitForTimeout(2500);
    }
}
