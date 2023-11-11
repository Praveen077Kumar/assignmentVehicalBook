const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Vehical= sequelize.define('vehical',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    model:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    seats:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:true,
    }
});

module.exports = Vehical;