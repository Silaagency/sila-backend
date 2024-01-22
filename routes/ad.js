const express = require('express');
const router = express.Router();

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

router.post('/', async (req, res, next) => {
    const adToPost = ({
        license: req.body.license,
        pageNumber: req.body.pageNumber,
        pageURL: req.body.pageURL,
        domainNumber: req.body.domainNumber,
        isApp: req.body.isApp,
        domainName: req.body.domainName,
        appID: req.body.appID,
        shopifyShop: req.body.shopifyShop,
        shopifyScreenshot: req.body.shopifyScreenshot,
        adNumber: req.body.adNumber,
        ads: req.body.ads.map((x) => ({
            adName: x.adName,
            adDeposit: x.adDeposit
        })),
        remark: req.body.remark
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

module.exports = router;