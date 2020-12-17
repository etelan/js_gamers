var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var startRouter = require('./routes/start');

const myModule = require('./public/src/module');
var session = require('express-session');

//var playRouter = require('./routes/play');

// Connect to client

// let page = req.query.page;
// let limit = req.query.limit;


var app = express();

var data = ""

app.get('/database', (req, res) => {
    // Front End
    client = myModule.clientCreate();
    myModule.clientConnect(client);


    client.query('SELECT * FROM production_leaderboard;', (err, res) => {
        console.log(err, res)
        client.end()
        data = res;
    })

    dataArray = JSON.parse(JSON.stringify(data))
    dataArray = dataArray.rows

    var newArray = []

    dataArray.forEach(function (item, index) {
        console.log(item, index);
        newArray.push([])
        newArray[index].push(item.name)
        newArray[index].push(item.points)
    });

    //WITH SECOND COLUMN
    newArray = newArray.sort(function(a,b) {
        return b[1] - a[1];
    });

    var htmlArray = []
    newArray.forEach(function (item, index) {
        htmlArray.push(`<strong><li style="list-style: none; font-size: 20px; color: rgb(150, 0, 0)">${item[0]}   =   ${item[1]} </li></strong><br>`)
    })

    var htmlString = htmlArray.join(" ")

    console.log(htmlString)
    res.send(htmlString)

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

    res.redirect("/leaderboard")

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
