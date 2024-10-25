const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qyt: {type: Number, required:true}
});

module.exports = mongoose.model('product',productsSchema);