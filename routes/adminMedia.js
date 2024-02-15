const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Imported modles:
const adminMedia = require('../models/adminMedia');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await adminMedia.find();
        res.json({
            count: docs.length,
            media: docs
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

router.post('/', upload.single('media'), async (req, res, next) => {
    const adminMediaToPost = ({
        media: req.file.path
    });

    try {
        const docs = await adminMedia.create(adminMediaToPost);
        res.json({
            Success: 'sent successfully!',
            media: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    const adminMediaID = req.params.id;

    try {
        const docs = await adminMedia.findByIdAndDelete(adminMediaID);
        res.json({
            Success: 'Deleted!',
            deleted: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

module.exports = router;