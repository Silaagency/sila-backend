const express = require('express');
const router = express.Router();

//Imported models:
const mediaLink = require('../models/mediaLink');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await mediaLink.find();
        res.json({
            count: docs.length,
            links: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.post('/', async (req, res, next) => {
    const mediaLinkToPost = ({
        userID: req.body.userID,
        link: req.body.link
    });

    try {
        const docs = await mediaLink.create(mediaLinkToPost);
        res.json({
            Success: 'link sent successfully!',
            link: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    const mediaLinkID = req.params.id;

    try {
        const docs = await mediaLink.findByIdAndDelete(mediaLinkID);
        res.json({
            Success: 'deleted successfully!',
            deleted: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

module.exports = router;