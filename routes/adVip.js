const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Imported models:
const adVip = require('../models/adVip');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await adVip.find();
        res.json({
            count: docs.length,
            ADs: docs
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

router.post('/', upload.single('shopifyScreenshot'), async (req, res, next) => {
    const adToPost = ({
        license: req.body.license,
        website: req.body.website,
        shopifyShop: req.body.shopifyShop,
        shopifyScreenshot: req.file ? req.file.path : '',
        adNumber: req.body.adNumber,
        ads: req.body.ads.map((x) => ({
            adName: x.adName,
            adDeposit: x.adDeposit,
            licenseName: x.licenseName
        })),
        remark: req.body.remark || '',
        totalCost: req.body.totalCost,
        userID: req.body.userID,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });

    try {
        const docs = await adVip.create(adToPost);
        res.json({
            Success: 'AD created successfully :)',
            ADCreated: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/:id', async (req, res, next) => {
    const adID = req.params.id;
    const update = req.body;

    update.status = req.body.status;

    try {
        const docs = await adVip.findByIdAndUpdate(adID, {$set: update}, {new: true});
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

router.delete('/:id', async (req, res, next) => {
    const adID = req.params.id;

    try {
        const docs = await adVip.findByIdAndDelete(adID);
        res.json({
            Success: 'AD deleted successfully!',
            deleted: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

module.exports = router;