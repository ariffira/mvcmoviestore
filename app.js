// add all required modules
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const HOST = 'localhost';
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');
//add routes modules
const index = require('./routes/index');
const movie = require('./routes/movie');

// add mongoose package
const mongoose = require('mongoose');
// connect mongoose using localhost
mongoose.connect(process.env.DB_LINK, {useNewUrlParser: true});

// Create the Express application object using top express() method
const app = express();

// view engine setup
app.set('view engine', 'hbs');

// use modules
// set public folder for static files css, images
app.use(express.static(path.join(__dirname, 'public')));
// use bodyparser
app.use(bodyParser.urlencoded({
    extended: false
}));
// routes modules use
app.use('/', index);
app.use('/movie', movie);

// listen the server 
app.listen(PORT, HOST, ()=> {
    console.log("Server is running on port number:" + PORT + ' and ' + HOST);
});



