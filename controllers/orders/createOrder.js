const {Order} = require('../../db');
const {Product} = require('../../db');
const {ProductOrder} = require('../../db');
const jwt = require('jsonwebtoken');


const createOrder = async (req, res)=>{
    try {
        const order = req.body;
        if(order){
            order.status = 'confirmed';
            order.time = new Date();
            const token = req.headers.authorization.split(' ')[1];
            const payload =jwt.decode(token);
            order.userId = payload.id;
        }else{
            const error = new Error('Request is not valid');
        }
        const productExists = await Product.findAll({
            where: {
                id: order.productId
            }
        });
        if(productExists){
            const newOrder = await Order.create(order);
            await ProductOrder.create({
                productId: order.productId,
                orderId: newOrder.id
            });
            res.status(200).json({message: 'Order created successfully!', order: newOrder});
        }else{
            res.status(404).json({ error: 'Product is not available at the moment' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'Product is not available at the moment'});
    };
};

module.exports = { createOrder };