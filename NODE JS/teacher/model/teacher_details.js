const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("mysql://root:Khasim123@localhost:3306/narasimha");

const teacher_details = sequelize.define("teacher_details",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        teacher_name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        teacher_email: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true,
        },
        teacher_phno: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true,
        },
        teacher_gender: {
            type: DataTypes.ENUM('MALE', 'FEMALE', 'OTHERS'),
            allowNull: false,
        },
        teacher_department: {
            type: DataTypes.ENUM('CSE', 'IT', 'EEE', 'MECH', 'MCA', 'MBA'),
            allowNull: false,
        },
        teacher_joiningdate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        teacher_status: {
            type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
            allowNull: false,
            defaultValue: 'ACTIVE',
        },
        teacher_salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        teacher_address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        teacher_id: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    }
);

module.exports = {sequelize,teacher_details};
