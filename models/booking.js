const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Booking= sequelize.define('Booking',{
    // userId:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    // },
    // VahicalId:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    // },

    startDate:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    endDate:{
        type:DataTypes.DATE,
        allowNull:false,
    }
});

module.exports= Booking;