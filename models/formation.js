const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formationSchema = new Schema ({
    photo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    videos: [{
        videoName: {
            type: String
        },
        videoLink: {
            type: String
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const formation = mongoose.model('formation', formationSchema);

module.exports = formation;