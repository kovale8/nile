const AWS = require('../aws');

const ses = new AWS.SES();

const params = {
    Destination: {
        ToAddresses: []
    },
    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: ''
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: ''
        }
    },
    Source: process.env.SENDER_EMAIL
};

function sendMail(options) {
    params.Destination.ToAddresses = [options.toAddress];
    params.Message.Body.Html.Data = options.body;
    params.Message.Subject.Data = options.subject;

    return ses.sendEmail(params).promise();
}

module.exports = sendMail;