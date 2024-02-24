const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creativeVidsSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    videos: {
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
    creativePlan: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const creativeVids = mongoose.model('creativeVids', creativeVidsSchema);

module.exports = creativeVids;