const {Product} = require('../../db');

const createProduct = async (req, res)=>{
    let product = req.body;
    const newProduct = await Product.create(product);
    res.status(200).json({message: 'Product created successfully!', product: newProduct});
};

module.exports = {createProduct};