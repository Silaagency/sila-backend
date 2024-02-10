const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema ({
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
    media: [{
        type: String,
        required: true
    }],
    pack: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const media = mongoose.model('media', mediaSchema);

module.exports = media;