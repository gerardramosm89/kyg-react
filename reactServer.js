var express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
//Create the app
var app = express();
router(app);
var path = require('path');
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));

//serve our static files
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8080
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(){
    console.log(`Express server is up on port ${port}`);
});