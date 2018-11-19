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

    getProductSentiment(productId) {
        return this.getReviewsForProduct(productId)
        .then(reviews => {
            const totals = {
                positive: 0,
                neutral: 0,
                negative: 0
            };
            const types = Object.keys(totals);

            reviews
                .map(review => review.sentiment)
                .forEach(sentiment => {
                    for (const type of types)
                        if (type === sentiment.toLowerCase())
                            totals[type]++;
                });

            let sentiment = types[0];
            let highest = totals[sentiment];

            for (let i = 1; i < types.length; i++) {
                const current = types[i];
                const count = totals[current];

                if (count > highest) {
                    sentiment = current;
                    highest = count;
                }
            }

            return sentiment;
        });
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
