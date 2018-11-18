const Entity = require('./entity');

class Reviews extends Entity {

    constructor() {
        super('reviews');
    }

    submitReview(productId, title, body) {
        this.query(`
            INSERT INTO ${this.table} (
                product_id,
                title,
                body
            ) VALUES (?, ?, ?)
        `, [productId, title, body]);
    }
}

module.exports = new Reviews();
