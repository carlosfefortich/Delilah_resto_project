module.exports = (sequelize, type) =>{
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING(30),
            allowNull: false,
            unique: true
        },
        fullname: {
            type: type.STRING(50),
            allowNull: false
        },
        email: {
            type: type.STRING(50),
            allowNull: false,
            unique: true
        },
        phone: {
            type: type.STRING(20),
            allowNull: false
        },
        address:{
            type: type.STRING(100),
            allowNull: false
        },
        password: {
            type: type.STRING(100),
            allowNull: false
        },
        role: {
            type: type.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
    );
}