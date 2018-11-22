const AWS = require('aws-sdk');

AWS.config.accessKeyId = process.env.ACCESS_KEY_ID;
AWS.config.secretAccessKey = process.env.SECRET_ACCESS_KEY;
AWS.config.update({region: 'us-east-1'});

module.exports = AWS;