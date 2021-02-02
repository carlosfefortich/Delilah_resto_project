module.exports = (sequelize, type)=>{
    return sequelize.define('product', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productName: {
            type: type.STRING,
            allowNull:false,
            unique: true
        },
        price: {
            type: type.STRING(10),
            allowNull: false
        }
    });
};