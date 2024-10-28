const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {type: String, required:true},
    author: {type: String, required:true},
    description: {type: String, required:true},
    imgUrl: {type: String, required:true},
    university: {type: String},
    date: {type:String}
});

module.exports = mongoose.model('articleSch',articleSchema);