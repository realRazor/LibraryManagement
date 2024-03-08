"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY MANAGEMENT SYSTEM Project with Sequelize
------------------------------------------------------- */
const sequelize = require('../../db');
const { DataTypes } = require('sequelize')
const Book = sequelize.define('TBL_BOOKs',{
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    author : DataTypes.STRING,
    ISBN : DataTypes.STRING,
    genre : DataTypes.STRING,
    publicationYear : DataTypes.DATE,
    image : DataTypes.TEXT  
})
// Syncronization:
//sequelize.sync({force : true}) // CREATE TABLE

sequelize.authenticate()
    .then(() => console.log('* Database connection is active! *'))
    .catch(() => console.log('* Cannot connect to Database! *'));


module.exports = Book