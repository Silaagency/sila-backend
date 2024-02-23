const express = require('express');
const router = express.Router();

//Imported Models:
const shootingLink = require('../models/shootingLink');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await shootingLink.find();
        res.json({
            count: docs.length,
            shootingLink: docs
        });
    } catch (err) {
        console.error(err);
    }
});

router.post('/', async (req, res, next) => {
    const shootingLinkToPost = ({
        userID: req.body.userID,
        link: req.body.link
    });

    try {
        const docs = await shootingLink.create(shootingLinkToPost);
        res.json({
            Success: 'Sent successfully!',
            link: docs
        });
    } catch (err) {
        console.error(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    const shootingLinkID = req.params.id;

    try {
        const docs = await shootingLink.findByIdAndDelete(shootingLinkID);
        res.json({
            Success: 'Deleted successfully!',
            deleted: docs
        });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;