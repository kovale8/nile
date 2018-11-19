const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});

const comprehend = new AWS.Comprehend();
const params = {
    LanguageCode: 'en'
};

function analyzeSentiment(text) {
    return new Promise((resolve, reject) => {
        params.Text = text;
        comprehend.detectSentiment(params, (error, data) => {
            if (error) reject(error);
            else resolve(data.Sentiment);
        });
    });
}

module.exports = { analyzeSentiment };