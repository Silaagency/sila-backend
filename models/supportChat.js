const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupportChatSchema = new Schema ({
    userID: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userPhoto: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    photoMessage: {
        type: String
    },
    type: {
        type: String,
        default: 'client'
    }
});

const supportChat = mongoose.model('supportChat', SupportChatSchema);

module.exports = supportChat;