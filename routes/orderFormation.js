const express = require('express');
const router = express.Router();

//Imported models:
const orderFormation = require('../models/orderFormation');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await orderFormation.find();
        res.json({
            count: docs.length,
            orders: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.post('/', async (req, res, next) => {
    const orderToPost = ({
        userID: req.body.userID,
        userName: req.body.userName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });

    try {
        const docs = await orderFormation.create(orderToPost);
        res.json({
            Success: 'order sent!',
            order: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.delete('/:id', async (req, res, next) => {
    const orderID = req.params.id;

    try {
        const docs = await orderFormation.findByIdAndDelete(orderID);
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