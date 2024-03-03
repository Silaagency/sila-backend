const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderFormationSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const orderFormation = mongoose.model('orderFormation', orderFormationSchema);

module.exports = orderFormation;