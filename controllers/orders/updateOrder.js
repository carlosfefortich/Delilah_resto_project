const {Order} = require('../../db');

const updateOrder = async (req, res)=>{
    const orderId = req.params.orderId;
    if(orderId){
        const status = req.body;
        await Order.update(status,{
            where: {
                id: orderId,
            }
        });
        res.status(200).json({message: 'Order status updated successfully!'});
        console.log(status);
        console.log(orderId);
    }
    

};

module.exports = { updateOrder };