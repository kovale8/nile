const sendMail = require('./sendMail');

function shareProduct(recipient, product) {
    return sendMail({
        toAddress: recipient,
        subject: `Check out ${product.name}!`,
        body: 'asdf'
    });
}

module.exports = shareProduct;