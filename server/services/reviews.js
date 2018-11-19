const analyzer = require('./analyzer');

const Entity = require('./entity');

class Reviews extends Entity {

    constructor() {
        super('reviews');
    }

    getReviewsForProduct(productId) {
        return this.query(`
            SELECT *
            FROM ${this.table}
            WHERE product_id = ?
        `, [productId]);
    }

    submitReview(productId, title, body) {
        analyzer.analyzeSentiment(body)
        .then(sentiment => this.query(`
            INSERT INTO ${this.table} (
                product_id,
                title,
                body,
                sentiment
            ) VALUES (?, ?, ?, ?)
        `, [productId, title, body, sentiment]));
    }
}

module.exports = new Reviews();
