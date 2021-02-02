const {Product} = require('../../db');

const deleteProduct = async (req, res)=>{
    const productId = req.params.productId;
    await Product.destroy({
        where: {
            id: productId
        }
    });

    res.status(200).json({message: 'Product deleted successfully!'});
};

module.exports = { deleteProduct };