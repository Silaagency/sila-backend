const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const usersSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    profilePhoto: {
        type: String
    },
    wallet: {
        type: Number,
        default: 0
    },
    eurWallet: {
        type: Number,
        default: 0
    },
    formations: [{
        formationId: {
            type: String
        }
    }],
    adCommision1: {
        type: Number,
        default: 6
    },
    adCommision3: {
        type: Number,
        default: 6
    },
    adCommision5: {
        type: Number,
        default: 6
    },
    adCommisionVip1: {
        type: Number,
        default: 8
    },
    adCommisionVip3: {
        type: Number,
        default: 7
    },
    adCommisionVip5: {
        type: Number,
        default: 6
    },
    ad1Price: {
        type: Number,
        default: 179
    },
    ad3Price: {
        type: Number,
        default: 299
    },
    ad5Price: {
        type: Number,
        default: 499
    },
    vipAd1Price: {
        type: Number,
        default: 259
    },
    vipAd3Price: {
        type: Number,
        default: 599
    },
    vipAd5Price: {
        type: Number,
        default: 799
    },
    date: {
        type: Date,
        default: Date.now
    }
});

usersSchema.pre('save', async function (next) {
    if (!this.isModified) {
        return next();
    }

    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (err) {
        return next(err)
    }
});

usersSchema.methods.comparePassword = async function(enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
    } catch (err) {
        console.error(err);
    }
};

const users = mongoose.model('users', usersSchema);

module.exports = users;