const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    image: {
        type: String,
        required: true,
        unique: true,
    },

    brand: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        default: 0,
    },

    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },

    category: {
        type: String,
        required: true,
    },

    Isfeatured: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;