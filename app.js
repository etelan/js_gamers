var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var startRouter = require('./routes/start');

const myModule = require('./public/src/module');
const requester = require('./public/src/read-data');

//var playRouter = require('./routes/play');

// Connect to client

// let page = req.query.page;
// let limit = req.query.limit;


var app = express();

app.get('/database', (req, res) => {
    // Front End
    client = myModule.clientCreate();
    myModule.clientConnect(client);

    client.query('SELECT * FROM production_leaderboard;', (err, res) => {
        console.log(err, res)
        client.end()
    })
    
    res.send("test")

});

app.get('/data-test', (req, res) => {
    requester.requestData()
    res.send("aaaa")
});


app.get('/database-send', (req, res) => {
    
    let name = req.query.name;
    let points = req.query.points;

    let query_string = `INSERT INTO production_leaderboard (name, points) VALUES ('${name}', ${points});`

    client = myModule.clientCreate();
    myModule.clientConnect(client);

    client.query(query_string, (err, res) => {
        console.log(err, res)
        client.end()
    })
    
    res.send("done")

});



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
