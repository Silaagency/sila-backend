const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    chargeAmount: {
        type: Number,
        required: true
    },
    transactionID: {
        type: String,
        required: true
    },
    photoProof: {
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
    status: {
        type: String,
        default: 'Pending'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const transaction = mongoose.model('transaction', transactionSchema);

module.exports = transaction;