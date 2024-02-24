const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creativeLinkSchema = new Schema ({
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

const creativeLink = mongoose.model('creativeLink', creativeLinkSchema);

module.exports = creativeLink;