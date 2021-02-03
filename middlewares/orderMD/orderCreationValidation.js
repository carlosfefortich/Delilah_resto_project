const orderCreationValidation = async (req, res, next)=>{
    const order = req.body;
    if(!order.payment_method){
        res.status(400).json({error: 'payment_method field is required'});
    }else if(!order.productId){
        res.status(400).json({error: 'productId field is required'});
    }else if(!order.quantity){
        res.status(400).json({error: 'quantity field is required'});
    }else{
        next();
    }
};

module.exports = { orderCreationValidation };