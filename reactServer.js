const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
//const cors = require('cors');

//DB Setup
mongoose.connect('mongodb://localhost:27017/auth')
//Create the app
const app = express();
const path = require('path');
app.use(morgan('combined'));
//app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);
//serve our static files
const port = process.env.PORT || 8081;
app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8080
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(){
    console.log(`Express server is up on port ${port}`);
});
