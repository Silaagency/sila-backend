const express = require('express');
const router = express.Router();

//Imported models:
const refund = require('../models/refund');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await refund.find();
        res.json({
            count: docs.length,
            refunds: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.post('/', async (req, res, next) => {
    const refundToPost = ({
        userID: req.body.userID,
        adAccountName: req.body.accountName,
        adAccountID: req.body.accountID,
        refundReason: req.body.refundReason,
        amount: req.body.amount
    });

    try {
        const docs = await refund.create(refundToPost);
        res.json({
            Success: 'Refund sent',
            refund: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/:id', async (req, res, next) => {
    const refundID = req.params.id;
    const update = req.body;

    update.status = req.body.status;

    try {
        const docs = await refund.findByIdAndUpdate(refundID, {$set: update}, {new: true});
        res.json({
            Success: 'Updated successfully!',
            update: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.delete('/:id', async (req, res, next) => {
    const refundID = req.params.id;

    try {
        const docs = await refund.findByIdAndDelete(refundID);
        res.json({
            Success: 'Deleted',
            deleted: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

module.exports = router;