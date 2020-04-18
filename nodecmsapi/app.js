var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/database');

//Connect to db
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to MongoDB');
});

//Init app
var app = express();

//Pretify JSON middleware
app.set('json spaces', 4);

// Body Parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Set routes
var pages = require('./routes/pages');

app.use('/pages', pages);

// Start the server
var port = 3000;
app.listen(port, function () {
    console.log('Server running at +' + port);
});
