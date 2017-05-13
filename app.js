'use strict';
//  SERVER PORT
const PORT = process.env.ADMIN_PORT || 11023;

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const ejs = require('ejs-mate');
const mongoose = require('mongoose');
const page = require('./routes/page');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.engine('ejs', ejs);
app.set('views', __dirname + '/views');

app.use(page);

app.listen(PORT, () => {
    console.log('server started at port ' + PORT);
});