const router = require('express').Router();
const { createProduct } = require('../controllers/products/createProduct');
const { getProducts } = require('../controllers/products/getProducts');
const { updateProduct } = require('../controllers/products/updateProduct');
const { deleteProduct } = require('../controllers/products/deleteProduct');
const { userTokenValidation } = require('../middlewares/userTokenValidation');
const { userTokenAdminValidation } = require('../middlewares/userTokenAdminValidation');
const { productCreationDataValidation } = require('../middlewares/productMD/productCreationDataValidation');
const { productCreationValidation } = require('../middlewares/productMD/productCreationValidation');

router.post('/create', userTokenValidation, userTokenAdminValidation, productCreationValidation, productCreationDataValidation, createProduct);
router.get('/', userTokenValidation, getProducts);
router.put('/update/:productId', userTokenValidation, userTokenAdminValidation, updateProduct);
router.delete('/delete/:productId', userTokenValidation, userTokenAdminValidation, deleteProduct);

module.exports = router;