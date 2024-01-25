const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentHistorySchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const paymentHistory = mongoose.model('paymentHistory', paymentHistorySchema);

module.exports = paymentHistory;