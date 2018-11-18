const products = require('../services/products');
const router = require('express').Router();

router.get('/', (req, res) => {
    products.getAll()
    .then(productList => res.render('index', {
        title: 'Online Shopping',
        products: productList
    }));
});

router.get('/product/:id', (req, res) => {
    products.get(req.params.id)
    .then(product => res.render('product', {
        title: `: ${product.name}`,
        product
    }));
});

module.exports = router;
