const router = require('express').Router();
const { createOrder } = require('../controllers/orders/createOrder');
const { getOrders } = require('../controllers/orders/getOrders');
const { updateOrder } = require('../controllers/orders/updateOrder');
const { userTokenValidation } = require('../middlewares/userTokenValidation');
const { userTokenAdminValidation } = require('../middlewares/userTokenAdminValidation');
const { orderCreationValidation } = require('../middlewares/orderMD/orderCreationValidation');

router.post('/create', userTokenValidation, orderCreationValidation, createOrder);
router.get('/',userTokenValidation, getOrders);
router.put('/update/:orderId', userTokenValidation, userTokenAdminValidation, updateOrder);

module.exports = router;