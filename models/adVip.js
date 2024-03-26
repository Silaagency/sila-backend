const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adVipSchema = new Schema ({
    license: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
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

const adVip = mongoose.model('adVip', adVipSchema);

module.exports = adVip;