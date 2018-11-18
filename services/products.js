const db = require('../db');

const products = {
    getAll() {
        return db.query(`
            SELECT *
            FROM products
        `);
    }
};

module.exports = products;
