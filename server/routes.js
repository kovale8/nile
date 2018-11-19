const products = require('./services/products');
const reviews = require('./services/reviews');
const router = require('express').Router();

router.get('/', (req, res) => {
    products.getAll()
    .then(productList => res.render('index', {
        title: 'Online Shopping',
        style: 'product_list',
        products: productList
    }));
});

router.get('/product/:id', async (req, res) => {
    const product = await products.get(req.params.id);
    const productReviews = await reviews.getReviewsForProduct(product.id);

    res.render('product', {
        title:  `: ${product.name}`,
        product,
        reviews: productReviews
    })
});

router.route('/review/:id')
.post((req, res) => {
    const productId = req.params.id;

    reviews.submitReview(
        productId,
        req.body.title,
        req.body.body
    );

    products.get(req.params.id)
    .then(product => res.render('accepted', {
        title: 'Product Review',
        product
    }));
});

module.exports = router;
