const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//models:
const formation = require('../models/formation');
//

router.get('/getFormations', async (req, res, next) => {
    try {
        const docs = await formation.find();
        res.json({
            count: docs.length,
            formations: docs
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
    cloudinary: cloudinary
});

const upload = multer({ storage: storage });
//

router.post('/uploadFormation', upload.single('formationPhoto'), async (req, res, next) => {
    try {
        const formationToPost = {
            photo: req.file.path,
            name: req.body.name,
            price: req.body.price,
            status: req.body.status,
            videos: req.body.videos || []
        };

        const docs = await formation.create(formationToPost);
        res.json({
            Success: 'Formation uploaded successfully!',
            uploadedFormation: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.patch('/changePhoto/:id', upload.single('formationPhoto'), async (req, res, next) => {
    try {
        const formationId = req.params.id;
        const update = req.body;

        update.photo = req.file.path;

        const docs = await formation.findByIdAndUpdate(formationId, {$set: update}, {new: true});
        res.json({
            Success: 'Formation photo was updated successfully!',
            updatedFormation: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.patch('/changeName/:id', async (req, res, next) => {
    try {
        const formationId = req.params.id;
        const update = req.body;

        update.name = req.body.name;

        const docs = await formation.findByIdAndUpdate(formationId, {$set: update}, {new: true});
        res.json({
            Success: 'Formation name was updated successfully!',
            updatedFormation: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.patch('/changePrice/:id', async (req, res, next) => {
    try {
        const formationId = req.params.id;
        const update = req.body;

        update.price = req.body.price;

        const docs = await formation.findByIdAndUpdate(formationId, {$set: update}, {new: true});
        res.json({
            Success: 'Formation price was updated successfully!',
            updatedFormation: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.patch('/changeStatus/:id', async (req, res, next) => {
    try {
        const formationId = req.params.id;
        const update = req.body;

        update.status = req.body.status;

        const docs = await formation.findByIdAndUpdate(formationId, {$set: update}, {new: true});
        res.json({
            Success: 'Formation status was updated successfully!',
            updatedFormation: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.delete('/deleteFormation/:id', async (req, res, next) => {
    try {
        const formationId = req.params.id;

        const docs = await formation.findByIdAndDelete(formationId);
        res.json({
            Success: 'Formation deleted successfully!',
            deleted: docs
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.post('/pushVideos/:id', async (req, res, next) => {
    try {
        const formationId = req.params.id;
        const videos = {
            videoName: req.body.videoName,
            videoLink: req.body.videoLink
        };

        const Formation = await formation.findById(formationId);
        Formation.videos.push(videos);
        await Formation.save();

        res.json({
            Success: 'Videos pushed successfully!',
            update: Formation
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.put('/updateVideoName/:videoId', async (req, res, next) => {
    try {
        const videoId = req.params.videoId;
        const videoName = req.body.videoName;

        // Find the video by ID and update the video name in the videos array
        const updatedVideo = await formation.findOneAndUpdate(
            { 'videos._id': videoId },
            { $set: { 'videos.$.videoName': videoName } },
            { new: true }
        );

        res.json({
            Success: 'Video name updated successfully!',
            update: updatedVideo
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.put('/updateVideoLink/:videoId', async (req, res, next) => {
    try {
        const videoId = req.params.videoId;
        const videoLink = req.body.videoLink;

        // Find the video by ID and update the video name in the videos array
        const updatedVideo = await formation.findOneAndUpdate(
            { 'videos._id': videoId },
            { $set: { 'videos.$.videoLink': videoLink } },
            { new: true }
        );

        res.json({
            Success: 'Video link updated successfully!',
            update: updatedVideo
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

router.delete('/deleteVideo/:videoId', async (req, res, next) => {
    try {
        const videoId = req.params.videoId;

        const updatedFormation = await formation.findOneAndUpdate(
            { 'videos._id': videoId },
            { $pull: { videos: { _id: videoId } } },
            { new: true }
        );

        res.json({
            Success: 'Video deleted successfully!',
            deleted: updatedFormation
        });
    } catch (err) {
        res.json({
            Error: err.message
        });
    }
});

module.exports = router;