const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//Imported models:
const supportChat = require('../models/supportChat');
//

router.get('/', async (req, res, next) => {
    try {
        const docs = await supportChat.find();
        res.json({
            count: docs.length,
            chats: docs
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

router.post('/', upload.single('photoMessage'), async (req, res, next) => {
    const chatToPost = ({
        userID: req.body.userID,
        userName: req.body.userName,
        userPhoto: req.body.userPhoto,
        message: req.body.message || '',
        photoMessage: req.file ? req.file.path : ''
    });

    try {
        const docs = await supportChat.create(chatToPost);
        res.json({
            Success: 'Sent!',
            chat: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

module.exports = router;