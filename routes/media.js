const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Imported models:
const media = require('../models/media');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await media.find();
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
        resource_type: 'auto',
        use_filename: true,
        unique_filename: false
    }
});

const upload = multer({ storage: storage });
//

router.post('/', upload.array('media'), async (req, res, next) => {
    const mediaToPost = ({
        userID: req.body.userID,
        media: req.files.map((x) => x.path),
        pack: req.body.pack,
        limit: req.body.limit
    });

    try {
        const docs = await media.create(mediaToPost);
        res.json({
            Success: 'Sent successfully!',
            media: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    const mediaID = req.params.id;

    try {
        const docs = await media.findByIdAndDelete(mediaID);
        res.json({
            Success: 'Deleted!',
            deleted: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

module.exports = router;