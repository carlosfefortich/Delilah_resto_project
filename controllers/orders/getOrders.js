const {Order} = require('../../db');
const {Product} = require('../../db');
const jwt = require('jsonwebtoken');

const getOrders = async (req, res)=>{
    const token = req.headers.authorization.split(' ')[1];
    const payload =jwt.decode(token)
    if(payload.role === 'customer'){
        const self = await Order.findAll({
            where: {
                userId: payload.id
            },
            include: Product
        });
        if(self.length != 0){
            res.status(200).json({orders: self})
        }else{
            res.status(404).json({error: 'You currently have no orders'})
        }
    }else if(payload.role === 'admin'){
       const orders = await Order.findAll({include: Product});
        if(orders.length != 0){
            res.status(200).json({orders: orders});
        }else{
            res.status(404).json({error: 'Currently there are no orders'});
        }
    }

    
}

module.exports = { getOrders };