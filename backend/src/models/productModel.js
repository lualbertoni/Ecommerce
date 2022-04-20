const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true,
    },
    images: {
        required: true,
        type: [String],
    },
});

module.exports = mongoose.model('Product', productSchema)