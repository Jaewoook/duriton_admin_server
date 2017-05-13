'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    image: String,
    product_id: Number,
    status: String,
    image_url: String,
    brand_name: String,
    purchase_time: {
        type: Date,
        default: Date.now
    }
});

module.exports.Product = mongoose.model('Product', productSchema)