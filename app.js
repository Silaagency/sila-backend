const http = require('http');
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

//Imported routes:
const ad = require('./routes/ad');
const users = require('./routes/users');
const transaction = require('./routes/transaction');
const paymentHistory = require('./routes/paymentHistory');
const refund = require('./routes/refund');
const bmShare = require('./routes/bmShare');
const contact = require('./routes/contact');
const media = require('./routes/media');
const adminMedia = require('./routes/adminMedia');
const sendMail = require('./routes/sendMail');
const shooting = require('./routes/shooting');
const shootingLink = require('./routes/shootingLink');
const creativeVids = require('./routes/creativeVids');
const creativeLink = require('./routes/creativeLink');
const mediaLink = require('./routes/mediaLink');
const orderFormation = require('./routes/orderFormation');
//


//Database config:
mongoose.connect('mongodb+srv://anes85594:UCjYa5EeJz5g1Mq5@cluster0.8lacwsn.mongodb.net/');
// mongoose.connect('mongodb://localhost:27017/sila');

const db = mongoose.connection

db.on('error', (err) => console.error(err));
db.on('open', () => console.log('Database Connected!'));
//


app.use(express.json());
app.use(cors());

//Activating routes:
app.use('/ad', ad);
app.use('/users', users);
app.use('/transaction', transaction);
app.use('/paymentHistory', paymentHistory);
app.use('/refund', refund);
app.use('/bmShare', bmShare);
app.use('/contact', contact);
app.use('/media', media);
app.use('/adminMedia', adminMedia);
app.use('/sendMail', sendMail);
app.use('/shooting', shooting);
app.use('/shootingLink', shootingLink);
app.use('/creativeVids', creativeVids);
app.use('/creativeLink', creativeLink);
app.use('/mediaLink', mediaLink);
app.use('/orderFormation', orderFormation);
//


//Server config:
const server = http.createServer(app);

server.listen(port);
//