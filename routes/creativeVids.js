const express = require('express');
const router = express.Router();

//Imported models:
const creativeVids = require('../models/creativeVids');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await creativeVids.find();
        res.json({
            count: docs.length,
            creativeVids: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.post('/', async (req, res, next) => {
    const creativeVidsToPost = ({
        userID: req.body.userID,
        video: req.body.video,
        userName: req.body.userName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        creativePlan: req.body.creativePlan
    });

    try {
        const docs = await creativeVids.create(creativeVidsToPost);
        res.json({
            Success: 'Uploaded successfully!',
            uploaded: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    const creativeVidID = req.params.id;

    try {
        const docs = await creativeVids.findByIdAndDelete(creativeVidID);
        res.json({
            Success: 'Deleted successfully!',
            deleted: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

module.exports = router;