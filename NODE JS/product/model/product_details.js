const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("mysql://root:Khasim123@localhost:3306/narasimha");

const product_details = sequelize.define("prod_details", {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Prod_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    SKU_Code: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
    },
    Category: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Date_Added: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    In_stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    Customer_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Customer_phno: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
    },
    Customer_email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
});

module.exports = { sequelize, product_details };
