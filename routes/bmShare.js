const express = require('express');
const router = express.Router();

//Imported models:
const bmShare = require('../models/bmShare');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await bmShare.find();
        res.json({
            count: docs.length,
            bmShares: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.post('/', async (req, res, next) => {
    const bmShareToPost = ({
        userID: req.body.userID,
        adID: req.body.adID,
        adName: req.body.adName,
        bmID: req.body.bmID
    });

    try {
        const docs = await bmShare.create(bmShareToPost);
        res.json({
            Success: 'Shared successfully!',
            bmShare: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/:id', async (req, res, next) => {
    const bmShareID = req.params.id;
    const update = req.body;

    update.status = req.body.status;

    try {
        const docs = await bmShare.findByIdAndUpdate(bmShareID, {$set: update}, {new: true});
        res.json({
            Success: 'Updated!',
            update: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.delete('/:id', async (req, res, next) => {
    const bmShareID = req.params.id;

    try {
        const docs = await bmShare.findByIdAndDelete(bmShareID);
        res.json({
            Success: 'Deleted!',
            deleted: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

module.exports = router;