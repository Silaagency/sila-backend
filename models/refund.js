const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refundSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    adAccountName: {
        type: String,
        required: true
    },
    adAccountID: {
        type: String,
        required: true
    },
    refundReason: {
        type: String,
        required: true
    },
    amount: {
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

const refund = mongoose.model('refund', refundSchema);

module.exports = refund;