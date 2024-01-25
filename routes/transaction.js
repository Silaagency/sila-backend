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
        const docs = await transaction.find();
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
    cloud_name: 'ddegvayfv', 
    api_key: '256687855467944', 
    api_secret: 'Rkqrr0O_j7jFjfFKxV_pGxc7lYI' 
  });

const storage = new CloudinaryStorage({
    cloudinary: cloudinary
});

const upload = multer({ storage: storage });
//

router.post('/', upload.single('photoProof'), async (req, res, next) => {
    const transactionToPost = ({
        userID: req.body.userID,
        paymentMethod: req.body.paymentMethod,
        chargeAmount: req.body.chargeAmount,
        transactionID: req.body.transactionID,
        photoProof: req.file.path,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
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

module.exports = router;