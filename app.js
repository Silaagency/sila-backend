const http = require('http');
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

//Imported routes:
const ad = require('./routes/ad');
//


//Database config:
mongoose.connect('mongodb://localhost:27017/sila');

const db = mongoose.connection

db.on('error', (err) => console.error(err));
db.on('open', () => console.log('Database Connected!'));
//


app.use(express.json());
app.use(cors());

//Activating routes:
app.use('/ad', ad);
//


//Server config:
const server = http.createServer(app);

server.listen(port);
//