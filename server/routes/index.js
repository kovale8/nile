const products = require('../services/products');
const router = require('express').Router();

router.get('/', (req, res) => {
    products.getAll()
    .then(productList => res.render('index', {
        title: 'Nile Online Shopping',
        products: productList
    }));
});

module.exports = router;
