const Entity = require('./entity');

const IMAGE_URL_PREFIX = 'https://s3.amazonaws.com/nile-product-images/';

class Products extends Entity {

    constructor() {
        super('products', products => {
            for (const product of products) {
                product.imageUrl = IMAGE_URL_PREFIX + product.imageName;
                product.price = `$${product.price}`;
            }

            return products;
        });
    }
}

module.exports = new Products();
