const {Product} = require('../../db');

const updateProduct = async (req, res)=>{
    const productId = req.params.productId;
    const product = req.body;
    await Product.update(product,{
        where: {
            id: productId
        }
    });

    res.status(200).json({message: 'Product updated successfully!', product: product});
};

module.exports = { updateProduct };