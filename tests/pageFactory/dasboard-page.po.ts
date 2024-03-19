import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page.po';

export class DashboardPage extends BasePage {
    private readonly lastName: Locator;
    private readonly firstName: Locator;
    private readonly email: Locator;
    private readonly phone: Locator;
    private readonly searchedElements: Locator;
    constructor(page: Page) {
        super(page);
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
     * Clicks on a side menu button.
     * @param buttonName - The name of the button to click.
     * @returns A promise that resolves when the button is clicked.
     */
    public async clickSideMenuButton(buttonName: string): Promise<void> {
        await this.page.getByRole('button', { name: buttonName }).click();
    }

    /**
     * Clicks on a link menu button with the specified name.
     *
     * @param linkName - The name of the link menu button to click.
     * @returns A promise that resolves once the button is clicked.
     */
    public async clickSideMenuLink(linkName: string): Promise<void> {
        await this.page.getByRole('link', { name: linkName, exact: true }).click();
    }

    /**
     * Checks if the side menu link is active.
     * @param linkName - The name of the link to check.
     * @returns A promise that resolves to a boolean indicating whether the link is active or not.
     */
    public async isSideMenuLinkActive(linkName: string): Promise<boolean> {
        return this.page
            .getByRole('link', { name: linkName, exact: true })
            .evaluate((el) => !el.classList.contains('aria-[current=page]'));
    }

    /**
     * Retrieves the last name from the page.
     * @returns A promise that resolves to a string representing the last name.
     */
    public async getLastName(): Promise<string> {
        return this.lastName.innerText();
    }

    /**
     * Retrieves the first name from the page.
     * @returns A promise that resolves to a string representing the first name.
     */
    public async getFirstName(): Promise<string> {
        return this.firstName.innerText();
    }

    /**
     * Retrieves the email from the page.
     * @returns A promise that resolves to the email as a string.
     */
    public async getEmail(): Promise<string> {
        return this.email.innerText();
    }

    /**
     * Retrieves the phone number from the page.
     * @returns A promise that resolves to a string representing the phone number.
     */
    public async getPhone(): Promise<string> {
        return this.phone.innerText();
    }

    /**
     * Clicks on the searched element.
     * Waits for the element to be visible before clicking.
     */
    public async clickSearchedElement(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.searchedElements.first().waitFor({ state: 'visible' });
        await this.searchedElements.first().click();
        await this.page.waitForTimeout(500);
    }
}
