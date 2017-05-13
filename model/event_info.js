'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventInfoSchema = new Schema({
    category: String,
    url: String,
    push_message: String,
    image_url: String
});

module.exports = mongoose.model('EventInfo', eventInfoSchema);