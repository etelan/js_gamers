var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var startRouter = require('./routes/start');
const myModule = require('./public/src/module');

//var playRouter = require('./routes/play');

// Connect to client




var app = express();

client = myModule.clientCreate();
myModule.clientConnect(client);

client.query('SELECT * from untitled_table_195;', (err, res) => {
    console.log(err, res)
    client.end()
  })

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
