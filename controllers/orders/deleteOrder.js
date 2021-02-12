const {Order} = require('../../db');

const deleteOrder = async (req, res)=>{
    const orderId = req.params.orderId;
    console.log(orderId);
    if(orderId){
        await Order.destroy({
            where: {
                id: orderId
            }
        });
        res.status(200).json({ message: 'Order has been deleted successfully' });
    }else{
        res.status(400).json({error: 'The ID provided is invalid or does not exists' });
    }   
};

module.exports = { deleteOrder };