const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const ProductModel = require('./models/product');

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

sequelize.sync({force: false}).then(()=>{
    console.log('Tables synchronized!');
});

module.exports = {
    User,
    Product
};