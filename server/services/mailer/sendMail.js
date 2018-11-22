const AWS = require('../aws');
const hbs = require('hbs');

const ses = new AWS.SES();

let params = `{
    "Destination": {
        "ToAddresses": ["{{toAddress}}"]
    },
    "Message": {
        "Body": {
            "Html": {
                "Charset": "UTF-8",
                "Data": "{{body}}"
            }
        },
        "Subject": {
            "Charset": "UTF-8",
            "Data": "{{subject}}"
        }
    },
    "Source": "${process.env.SENDER_EMAIL}"
}`;
params = hbs.compile(params);

function sendMail(options) {
    return ses.sendEmail(JSON.parse(params({
        toAddress: options.toAddress,
        subject: options.subject,
        body: options.body
    }))).promise();
}

module.exports = { sendMail };