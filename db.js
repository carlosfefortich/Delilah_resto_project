const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const ProductModel = require('./models/product');
const OrderModel = require('./models/order');
const ProductOrderModel = require('./models/ProductsOrders');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, 
    {
        dialect: 'mariadb',
        host: process.env.DB_HOST
    }
);

try {
    sequelize.authenticate().then(()=>{
        console.log('Connected to the database successfully!');
    });
} catch (error) {
    console.error('Unable to connect to the database: ', error);
};

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);
const ProductOrder = ProductOrderModel(sequelize, Sequelize);


User.hasMany(Order, {
    foreingKey: {
        name: 'userId',
        allowNull: false
    }
});
Order.belongsTo(User);

Product.belongsToMany(Order, { through: ProductOrder });
Order.belongsToMany(Product, { through: ProductOrder });


sequelize.sync({force: false}).then(()=>{
    console.log('Tables synchronized!');
});

module.exports = {
    User,
    Product,
    Order,
    ProductOrder
};