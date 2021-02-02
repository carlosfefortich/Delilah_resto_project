const {Product} = require('../../db');

const updateProduct = async (req, res)=>{
    const productId = req.params.productId;
    if(productId){
        const product = req.body;
        await Product.update(product,{
            where: {
                id: productId
            }
        });

        res.status(200).json({message: 'Product updated successfully!', product: product});
    }else{
        res.status(400).json({error: 'The ID provided is invalid or does not exists' });
    };
    
};

module.exports = { updateProduct };