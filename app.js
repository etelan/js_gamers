var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var startRouter = require('./routes/start');
//var playRouter = require('./routes/play');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); //use hbs?

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// route setup
app.use('/', startRouter);
//app.use('/play', startRouter);



module.exports = app;
