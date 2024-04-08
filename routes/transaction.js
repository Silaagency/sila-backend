const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Imported models:
const transaction = require('../models/transaction');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await transaction.find().sort({ date: -1 });
        res.json({
            count: docs.length,
            transactions: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

//cloudinary config for cloud file storing:
cloudinary.config({ 
    cloud_name: 'dkymtxsdl', 
    api_key: '215615597633189', 
    api_secret: 'NLVEsDjXrZfC0mf0bwoLOeTvyfo' 
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary
});

const upload = multer({ storage: storage });
//

router.post('/', upload.single('photoProof'), async (req, res, next) => {
    const transactionToPost = ({
        userID: req.body.userID,
        currency: req.body.currency,
        paymentMethod: req.body.paymentMethod,
        chargeAmount: req.body.chargeAmount,
        transactionID: req.body.transactionID || '',
        photoProof: req.file.path,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        userName: req.body.userName
    });

    try {
        const docs = await transaction.create(transactionToPost);
        res.json({
            Success: 'Transaction sent successfully!',
            transaction: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.delete('/:id', async (req, res, next) => {
    const transactionID = req.params.id;

    try {
        const docs = await transaction.findByIdAndDelete(transactionID);
        res.json({
            Success: 'Deleted successfully!',
            deleted: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/:id', async (req, res, next) => {
    const transactionID = req.params.id;
    const update = req.body;

    update.status = req.body.status;

    try {
        const docs = await transaction.findByIdAndUpdate(transactionID, {$set: update}, {new: true});
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

module.exports = router;