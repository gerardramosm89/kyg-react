var express = require('express');

//Create the app
var app = express();
var path = require('path');
//serve our static files
app.use(express.static(__dirname + '/'));
console.log("dirname is: ", __dirname);
// viewed at http://localhost:8080
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, function(){
    console.log('Express server is up on port 8080');
});