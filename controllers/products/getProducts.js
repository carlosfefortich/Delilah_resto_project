const {Product} = require('../../db');

const getProducts = async(req, res)=>{
    const products = await Product.findAll();
    if(products.length != 0){
        res.status(200).json({products: products})
    }else{
        res.status(404).json({error: 'There are no products at the moment'})
    };
};

module.exports = { getProducts };