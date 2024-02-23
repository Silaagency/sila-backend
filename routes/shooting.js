const express = require('express');
const router = express.Router();

//Imported models:
const shooting = require('../models/shooting');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await shooting.find();
        res.json({
            count: docs.length,
            shooting: docs
        });
    } catch (err) {
        console.error(err);
    }
});

router.post('/', async (req, res, next) => {
    const shootingToPost = ({
        userID: req.body.userID,
        userName: req.body.userName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        shootingType: req.body.shootingType,
        shootingPlan: req.body.shootingPlan
    });

    try {
        const docs = await shooting.create(shootingToPost);
        res.json({
            Success: 'sent successfully!',
            shootingPicked: docs
        });
    } catch (err) {
        console.error(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    const shootingID = req.params.id;

    try {
        const docs = await shooting.findByIdAndDelete(shootingID);
        res.json({
            Success: 'deleted successfully!',
            deleted: docs
        });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;