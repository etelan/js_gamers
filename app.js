var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var startRouter = require('./routes/start');
const myModule = require('./public/src/module');
var session = require('express-session');

//var playRouter = require('./routes/play');

// Connect to client




var app = express();

app.get('/database', (req, res) => {
    // Front End
    console.log("BC")
    client = myModule.clientCreate();
    console.log("BCC")
    myModule.clientConnect(client);

    console.log("BQ")
    client.query('SELECT * FROM production_leaderboard;', (err, res) => {
        console.log(err, res)
        client.end()
    })

    res.send("test")

    console.log("END")
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); //use hbs?

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'sbcibcidscid',resave:false,saveUninitialized:false}));
app.use(express.static(path.join(__dirname, 'public')));


// route setup
app.use('/', startRouter);
//app.use('/play', startRouter);



module.exports = app;
