const { allProducts, addProduct, allclothes } = require('../controllers/productsController');

const router = require('express').Router();




router.route('/all').get(allProducts);
router.route('/add').post(addProduct);
router.route('/clothes').get(allclothes);



module.exports = router;
