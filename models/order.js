module.exports = (sequelize, type)=>{
    return sequelize.define('order', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time: {
            type: type.TIME,
            allowNull: true
        },
        productId: {
            type: type.INTEGER,
            allowNull: false
        },
        status: {
            type: type.STRING(20),
            allowNull: true
        },
        payment_method: {
            type: type.STRING(20),
            allowNull: false
        },
        quantity: {
            type: type.STRING(10),
            allowNull: false
        }
    },
    { timestamps: false }
    );
};