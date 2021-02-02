const productCreationValidation = (req, res, next)=>{
    const product = req.body;
    if(!product.productName){
        res.status(400).json({error: 'Product name is required'});
    }else if(!product.price){
        res.status(400).json({error: 'Product price is required'});
    }else{
        next();
    }
};

module.exports = { productCreationValidation };