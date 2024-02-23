const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shootingLinkSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const shootingLink = mongoose.model('shootingLink', shootingLinkSchema);

module.exports = shootingLink;