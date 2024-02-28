const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaLinkSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    linkName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const mediaLink = mongoose.model('mediaLink', mediaLinkSchema);

module.exports = mediaLink;