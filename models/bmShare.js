const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bmShareSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    adID: {
        type: String,
        required: true
    },
    adName: {
        type: String,
        required: true
    },
    bmID: {
        type: String,
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

const bmShare = mongoose.model('bmShare', bmShareSchema);

module.exports = bmShare;