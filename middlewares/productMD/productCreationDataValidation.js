const {Product} = require('../../db');

const productCreationDataValidation = async (req, res, next)=>{
    const product = req.body;
    const productInfo = await Product.findAll({
        where:{
            productName: product.productName
        }
    });

    if(productInfo.length === 0){
        next();
    }else{
        res.status(403).json({error: 'This product already exists!'});
    };
};

module.exports = { productCreationDataValidation };