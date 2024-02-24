const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Imported models:
const creativeVids = require('../models/creativeVids');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await creativeVids.find();
        res.json({
            count: docs.length,
            creativeVids: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

//cloudinary config for cloud file storing:
cloudinary.config({ 
    cloud_name: 'dkymtxsdl', 
    api_key: '215615597633189', 
    api_secret: 'NLVEsDjXrZfC0mf0bwoLOeTvyfo' 
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        resource_type: 'auto'
    }
});

const upload = multer({ storage: storage });
//

router.post('/', upload.single('videos'), async (req, res, next) => {
    const creativeVidsToPost = ({
        userID: req.body.userID,
        videos: req.file.path,
        userName: req.body.userName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        creativePlan: req.body.creativePlan
    });

    try {
        const docs = await creativeVids.create(creativeVidsToPost);
        res.json({
            Success: 'Uploaded successfully!',
            uploaded: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    const creativeVidID = req.params.id;

    try {
        const docs = await creativeVids.findByIdAndDelete(creativeVidID);
        res.json({
            Success: 'Deleted successfully!',
            deleted: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

module.exports = router;