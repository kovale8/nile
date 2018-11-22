const AWS = require('./aws');

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