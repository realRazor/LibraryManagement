"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY MANAGEMENT SYSTEM Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json())

require('express-async-errors')
// Routes
app.use(require('./app/routes/book.router'))

// ErrorHandler:
app.use(require('./errorHandler'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log(`Running on : http://${HOST}:${PORT}`));