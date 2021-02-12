const {Order} = require('../../db');
const {Product} = require('../../db');
const {ProductOrder} = require('../../db');
const jwt = require('jsonwebtoken');


const createOrder = (req, res)=>{
    const order = req.body;
    const orderList = req.body.data;
    if(order){
        order.status = 'confirmed';
        order.time = new Date();
        const token = req.headers.authorization.split(' ')[1];
        const payload =jwt.decode(token);
        order.userId = payload.id;

        Order.create(order).then((createdOrder)=>{
            orderList.forEach(eachOrder => {
                eachOrder.orderId = createdOrder.id
            });
            console.log(orderList);
            ProductOrder.bulkCreate(orderList).then(()=>{
                res.status(200).json({message: 'Order created successfully!'});
            })
        });

    }else{
        const error = new Error('Request is not valid');
    }     
};

module.exports = { createOrder };