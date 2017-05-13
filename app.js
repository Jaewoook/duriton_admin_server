'use strict';
//  SERVER PORT
const PORT = process.env.ADMIN_PORT || 8887;

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const ejs = require('ejs-mate');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.engine('ejs', ejs);
app.set('views', __dirname + 'views');

app.listen(PORT, () => {
    console.log('server started');
})