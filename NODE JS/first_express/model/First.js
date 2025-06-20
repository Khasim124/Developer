const { Sequelize, DataTypes } = require('sequelize');

// Correct usage: Capitalize Sequelize when instantiating
const sequelize = new Sequelize("mysql://root:Khasim123@localhost:3306/narasimha");

const student_info = sequelize.define("student_info", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  student_branch: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  student_phno: {
    type: DataTypes.BIGINT, 
    allowNull: false,
  },
  student_address: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  student_fees: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
);

// Export using CommonJS
module.exports = { sequelize, student_info };
