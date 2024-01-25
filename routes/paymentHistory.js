const express = require('express');
const router = express.Router();

//Imported models:
const paymentHistory = require('../models/paymentHistory');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await paymentHistory.find();
        res.json({
            count: docs.length,
            history: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.post('/', async (req, res, next) => {
    const paymentToPost = ({
        userID: req.body.userID,
        type: req.body.type,
        amount: req.body.amount
    });

    try {
        const docs = await paymentHistory.create(paymentToPost);
        res.json({
            Success: 'Payment saved to history',
            history: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

module.exports = router;