import { Mailsac } from '@mailsac/api';
import { Base } from './base.po.js';
export class MailSacApi extends Base {
    mailsac = new Mailsac({ headers: { 'Mailsac-Key': process.env.MAILSAC_KEY } });
    /**
     * Retrieves the list of email IDs for the specified email address.
     * If no email address is provided, it uses the email address from the environment variable MAILSAC_EMAIL.
     * @param email The email address to retrieve the emails for. Defaults to the value of process.env.MAILSAC_EMAIL.
     * @returns An array of email IDs.
     */
    public async getEmailsList(email: string = process.env.MAILSAC_EMAIL) {
        const result = await this.mailsac.messages.listMessages(email);
        const ids = result.data.map((message) => message._id);
        return ids;
    }

    /**
     * Deletes all emails from the specified mailbox.
     * @returns {Promise<void>} A promise that resolves when all emails are deleted.
     */
    public async deleteAllEmails(email: string = process.env.MAILSAC_EMAIL) {
        await this.mailsac.messages.deleteAllMessages(email);
    }

    /**
     * Deletes a specific email message from the Mailsac API.
     *
     * @param messageId - The ID of the email message to delete.
     * @param email - The email address associated with the message. Defaults to the value of the MAILSAC_EMAIL environment variable.
     * @returns A promise that resolves when the email message is successfully deleted.
     */
    public async deleteOneEmail(messageId: string, email: string = process.env.MAILSAC_EMAIL) {
        await this.mailsac.messages.deleteMessage(email, messageId);
    }

    /**
     * Retrieves the email message from the Mailsac API.
     *
     * @param messageId - The ID of the email message to retrieve.
     * @param email - The email address associated with the message. Defaults to the value of the MAILSAC_EMAIL environment variable.
     * @returns A promise that resolves to the email message.
     */
    public async getEmailMessage(messageId: string, email: string = process.env.MAILSAC_EMAIL) {
        const result = await this.mailsac.messages.getMessageMetadata(email, messageId);
        return result.data;
    }
}
