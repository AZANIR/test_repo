const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

exports.handler = async (event, context) => {
    const auth = event.headers.authorization || '';
    const htpasswdPath = path.join(__dirname, '..', '..', '.htpasswd');

    const validateUser = (authHeader) => {
        const base64Credentials = authHeader.split(' ')[1];
        const [username, password] = Buffer.from(base64Credentials, 'base64').toString('ascii').split(':');

        const htpasswdContent = fs.readFileSync(htpasswdPath, 'utf8');
        const lines = htpasswdContent.split('\n');
        for (let line of lines) {
            const [fileUser, filePass] = line.split(':');
            if (fileUser === username) {
                const sha1 = crypto.createHash('sha1').update(password).digest('base64');
                return filePass === `{SHA}${sha1}`;
            }
        }
        return false;
    };

    if (auth.startsWith('Basic ') && validateUser(auth)) {
        return {
            statusCode: 200,
            body: 'Authorized'
        };
    }

    return {
        statusCode: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Protected Site"' },
        body: 'Unauthorized'
    };
};
