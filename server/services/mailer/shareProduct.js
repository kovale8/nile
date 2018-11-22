const hbs = require('hbs');
const sendMail = require('./sendMail');
const templates = require('./templates');

const template = hbs.compile(templates.get('share_product'));

function shareProduct(recipient, product) {
    return sendMail({
        toAddress: recipient,
        subject: `Check out ${product.name}!`,
        body: template({
            site: process.env.SITE_NAME,
            product
        })
    });
}

module.exports = shareProduct;