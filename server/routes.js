const mailer = require('./services/mailer');
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
    let sentiment = await reviews.getProductSentiment(product.id);

    res.render('product', {
        title:  `: ${product.name}`,
        reviews: productReviews,
        product,
        sentiment
    })
});

router.post('/review/:id', (req, res) => {
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

router.get('/share/:email-:id', (req, res) => {
    products.get(req.params.id)
    .then(product => mailer.shareProduct(req.params.email, product))
    .then(() => res.sendStatus(202));
});

module.exports = router;
