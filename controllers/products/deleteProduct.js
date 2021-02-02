const {Product} = require('../../db');

const deleteProduct = async (req, res)=>{
    const productId = req.params.productId;
    if(productId){
        await Product.destroy({
        where: {
            id: productId
            }
        });

    res.status(200).json({message: 'Product deleted successfully!'});
    }else{
        res.status(400).json({error: 'The ID provided is invalid or does not exists' });
    };
    
};

module.exports = { deleteProduct };