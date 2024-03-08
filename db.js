"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY MANAGEMENT SYSTEM Project with Sequelize
------------------------------------------------------- */
require("dotenv").config();
const HOST = process.env.HOST || 'localhost';
const DBUSERNAME = process.env.DBUSERNAME || 'Razor';
const PASSWORD = process.env.PASSWORD || '682542';
const DBNAME = process.env.DBNAME || 'DB_LIBRARY_MANAGEMENT';
// MODELS:
const { Sequelize } = require('sequelize')
// sequelize instance oluştur:
const sequelize = new Sequelize(`postgres://${DBUSERNAME}:${PASSWORD}@${HOST}:5432/${DBNAME}`)
//const sequelize = new Sequelize('postgres://useradmin:1234@localhost:5432/DB_LIBRARY_MANAGEMENT')
//console.log(`postgres://${DBUSERNAME}:${PASSWORD}@${HOST}:5432/${DBNAME}`)
module.exports = sequelize
