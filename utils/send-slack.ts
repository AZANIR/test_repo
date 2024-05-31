// Add the "type": "module" field to the package.json file
import { App } from '@slack/bolt';
require('dotenv').config();

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});

export async function sendSlackMessage(passed, failed) {
    const blocks = [
        {
            type: 'rich_text',
            elements: [
                {
                    type: 'rich_text_section',
                    elements: [
                        {
                            type: 'emoji',
                            name: 'performing_arts',
                            unicode: '1f3ad'
                        },
                        {
                            type: 'text',
                            text: ' '
                        },
                        {
                            type: 'text',
                            text: 'Playwright E2E Test Results',
                            style: {
                                bold: true
                            }
                        },
                        {
                            type: 'text',
                            text: '\nsome text in the report system\n'
                        },
                        {
                            type: 'emoji',
                            name: 'rocket',
                            unicode: '1f680'
                        },
                        {
                            type: 'text',
                            text: ' after run test: - '
                        },
                        {
                            type: 'emoji',
                            name: 'white_check_mark',
                            unicode: '2705'
                        },
                        {
                            type: 'text',
                            text: ` ${passed} ; `
                        },
                        {
                            type: 'emoji',
                            name: 'x',
                            unicode: '274c'
                        },
                        {
                            type: 'text',
                            text: ` ${failed};\n\n`
                        }
                    ]
                },
                {
                    type: 'rich_text_list',
                    style: 'bullet',
                    indent: 0,
                    border: 1,
                    elements: [
                        {
                            type: 'rich_text_section',
                            elements: [
                                {
                                    type: 'text',
                                    text: 'id_site: some id_site'
                                }
                            ]
                        },
                        {
                            type: 'rich_text_section',
                            elements: [
                                {
                                    type: 'text',
                                    text: 'id_client: some text'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    await app.client.chat.postMessage({
        token: process.env.SLACK_BOT_TOKEN,
        channel: process.env.SLACK_CHANNEL,
        text: 'Playwright E2E Test Results',
        blocks: blocks
    });
}
