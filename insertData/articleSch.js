const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    articleDetails: [
        {
            title: { type: String, required: true },
            author: { type: String, required: true },
            description: { type: String, required: true },
            imgUrl: { type: String, required: true },
            university: { type: String },
            date: { type: Date }
        }
    ]
});

module.exports = mongoose.model('articleSch',articleSchema);