const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adSchema = new Schema ({
    license: {
        type: String,
        required: true
    },
    pageNumber: {
        type: Number,
        required: true
    },
    pageURL: [{
        type: String,
        required: true
    }],
    domainNumber: {
        type: Number,
        required: true
    },
    isApp: {
        type: Boolean,
        required: true
    },
    domainName: [{
        type: String,
        required: true
    }],
    appID: [{
        type: String
    }],
    shopifyShop: {
        type: Boolean,
        required: true
    },
    shopifyScreenshot: {
        type: String
    },
    adNumber: {
        type: Number,
        required: true
    },
    ads: [{
        adName: {
            type: String,
            required: true
        },
        adDeposit: {
            type: Number,
            required: true
        },
        licenseName: {
            type: String,
            required: true
        }
    }],
    remark: {
        type: String
    },
    totalCost: {
        type: Number,
        required: true
    },
    userID: {
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
    status: {
        type: String,
        default: 'Pending'
    }
});

const ad = mongoose.model('ad', adSchema);

module.exports = ad;