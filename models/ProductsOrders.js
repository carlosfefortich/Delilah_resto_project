const { Product, Order } = require("../db")

module.exports = (sequelize, type) =>{
    return sequelize.define('ProductsOrders', {
        productId: {
            type: type.INTEGER,
            references: {
                model: Product,
                key: 'id'
            }
        },
        orderId: {
            type: type.INTEGER,
            references: {
                model: Order,
                key: 'id'
            }
        }
    },
    { timestamps: false }
    );
};