const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Firstname: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 3
    },

    Lastname: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 3
    },

    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 12
    },

    Password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8
    },

    IsAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});


const User = mongoose.model('User', userSchema);

module.exports = User;