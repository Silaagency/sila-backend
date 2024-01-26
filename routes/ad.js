const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Imported models:
const ad = require('../models/ad');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await ad.find();
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
    cloud_name: 'ddegvayfv', 
    api_key: '256687855467944', 
    api_secret: 'Rkqrr0O_j7jFjfFKxV_pGxc7lYI' 
  });

const storage = new CloudinaryStorage({
    cloudinary: cloudinary
});

const upload = multer({ storage: storage });
//

router.post('/', upload.single('shopifyScreenshot'), async (req, res, next) => {
    const adToPost = ({
        license: req.body.license,
        pageNumber: req.body.pageNumber,
        pageURL: req.body.pageURL,
        domainNumber: req.body.domainNumber,
        isApp: req.body.isApp,
        domainName: req.body.domainName,
        appID: req.body.appID || [],
        shopifyShop: req.body.shopifyShop,
        shopifyScreenshot: req.file ? req.file.path : '',
        adNumber: req.body.adNumber,
        ads: req.body.ads.map((x) => ({
            adName: x.adName,
            adDeposit: x.adDeposit
        })),
        remark: req.body.remark || '',
        totalCost: req.body.totalCost
    });

    try {
        const docs = await ad.create(adToPost);
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

router.delete('/:id', async (req, res, next) => {
    const adID = req.params.id;

    try {
        const docs = await ad.findByIdAndDelete(adID);
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



////////////////THIS IS A PUSH TEST
router.post('/pushTest/:id', async (req, res, next) => {
    const licenseID = req.params.id;
    const pageURL = req.body.pageURL;

    try {
        const license = await ad.findById(licenseID);
        license.pageURL.push(pageURL);
        const docs = await ad.create(license);
        res.json({
            Success: 'Pushed!',
            push: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});
////////////////////////////

module.exports = router;