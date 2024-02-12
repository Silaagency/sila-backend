const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminMediaSchema = new Schema ({
    media: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const adminMedia = mongoose.model('adminMedia', adminMediaSchema);

module.exports = adminMedia;