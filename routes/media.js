const express = require('express');
const router = express.Router();

//Imported models:
const media = require('../models/media');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await media.find();
        res.json({
            count: docs.length,
            media: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.post('/', async (req, res, next) => {
    const mediaToPost = ({
        userID: req.body.userID,
        userName: req.body.userName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        media: req.body.media,
        pack: req.body.pack
    });

    try {
        const docs = await media.create(mediaToPost);
        res.json({
            Success: 'Sent successfully!',
            media: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    const mediaID = req.params.id;

    try {
        const docs = await media.findByIdAndDelete(mediaID);
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