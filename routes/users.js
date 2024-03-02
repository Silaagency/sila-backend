const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const bcrypt = require('bcrypt');

// models
const users = require('../models/users');

router.get('/', async (req, res, next) => {
    try {
        const docs = await users.find();
        res.json({
            count: docs.length,
            users: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.get('/:id', async (req, res, next) => {
    const userID = req.params.id;

    try {
        const docs = await users.findById(userID);
        res.json({
            user: docs
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

router.post('/', upload.single('profilePhoto'), async (req, res, next) => {
    const user = ({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber || 0,
        profilePhoto: req.file ? req.file.path : 'https://cdn-icons-png.freepik.com/512/1144/1144709.png?uid=R124852356&ga=GA1.1.528102401.1697579373&'
    });

    try {
        const docs = await users.create(user);
        res.json({
            Success: 'user created successfully!',
            user: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.delete('/:id', async (req, res, next) => {
    const userID = req.params.id;

    try {
        const docs = await users.findByIdAndDelete(userID);
        res.json({
            Success: 'user deleted successfully!',
            userDeleted: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.post('/login', async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await users.findOne({ email: email });

        if (user && await user.comparePassword(password)) {
            res.json({
                Success: 'You are logged-in successfully!',
                userInfo: user
            })
        } else {
            res.json({
                Failure: 'Somthing went wrong :( please re-check your credentials!'
            })
        }
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

const hashPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (err) {
        console.error(err);
    }
};

router.patch('/changePassword/:id', async (req, res, next) => {
    const userID = req.params.id;
    const update = req.body;

    try {
        update.password = await hashPassword(update.password)
        const docs = await users.findByIdAndUpdate(userID, {$set: update}, {new: true});
        res.json({
            Success: 'Your password was updated successfully!',
            update: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/changeProfilePhoto/:id', upload.single('profilePhoto'), async (req, res, next) => {
    const userID = req.params.id;
    const update = req.body;

    update.profilePhoto = req.file.path;

    try {
        const docs = await users.findByIdAndUpdate(userID, {$set: update}, {new: true});
        res.json({
            Success: 'Your profile photo has been updated successfully!',
            update: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/phone/:id', async (req, res, next) => {
    const userID = req.params.id;
    const update = req.body;

    update.phoneNumber = req.body.phoneNumber;

    try {
        const docs = await users.findByIdAndUpdate(userID, {$set: update}, {new: true});
        res.json({
            Success: 'Updated!',
            update: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/userName/:id', async (req, res, next) => {
    const userID = req.params.id;
    const update = req.body;

    update.userName = req.body.userName;

    try {
        const docs = await users.findByIdAndUpdate(userID, {$set: update}, {new: true});
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

router.patch('/wallet/:id', async (req, res, next) => {
    const userID = req.params.id;
    const update = req.body;

    update.wallet = req.body.wallet;

    try {
        const docs = await users.findByIdAndUpdate(userID, {$set: update}, {new: true});
        res.json({
            Success: 'Updated wallet!',
            update: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/eurWallet/:id', async (req, res, next) => {
    const userID = req.params.id;
    const update = req.body;

    update.eurWallet = req.body.eurWallet;

    try {
        const docs = await users.findByIdAndUpdate(userID, {$set: update}, {new: true});
        res.json({
            Success: 'Updated wallet!',
            update: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

router.patch('/eCommerce/:id', async (req, res, next) => {
    const userID = req.params.id;
    const update = req.body;

    update.eCommerceFormation = req.body.eCommerceFormation;

    try {
        const docs = await users.findByIdAndUpdate(userID, {$set: update}, {new: true});
        res.json({
            Success: 'Updated formation!',
            update: docs
        })
    } catch (err) {
        res.json({
            Error: err.message
        })
    }
});

module.exports = router;