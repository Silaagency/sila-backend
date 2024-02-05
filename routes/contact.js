const express = require('express');
const router = express.Router();

//Imported models:
const contact = require('../models/contact');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await contact.find();
        res.json({
            count: docs.length,
            messages: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.post('/', async (req, res, next) => {
    const messageToPost = ({
        userName: req.body.userName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        message: req.body.message
    });

    try {
        const docs = await contact.create(messageToPost);
        res.json({
            Success: 'Sent message!',
            message: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.delete('/:id', async (req, res, next) => {
    const messageID = req.params.id;

    try {
        const docs = await contact.findByIdAndDelete(messageID);
        res.json({
            Success: 'deleted!',
            deleted: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

module.exports = router;