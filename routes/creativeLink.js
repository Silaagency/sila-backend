const express = require('express');
const router = express.Router();

//Imported models:
const creativeLink = require('../models/creativeLink');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await creativeLink.find();
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
    const creativeLinkToPost = ({
        userID: req.body.userID,
        link: req.body.link,
        linkName: req.body.linkName
    });

    try {
        const docs = await creativeLink.create(creativeLinkToPost);
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
    const creativeLinkID = req.params.id;

    try {
        const docs = await creativeLink.findByIdAndDelete(creativeLinkID);
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