const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shootingSchema = new Schema ({
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
    shootingType: {
        type: String,
        required: true
    },
    shootingPlan: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const shooting = mongoose.model('shooting', shootingSchema);

module.exports = shooting;