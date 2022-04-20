const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: {
        required: true,
        type: String,
    },
});

module.exports = mongoose.model('Category', categorySchema)