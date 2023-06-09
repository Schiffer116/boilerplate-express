require('dotenv').config()
let express = require('express');
let bodyParser = require('body-parser');

let app = express();


app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
    // res.send('Hello Express');
});

app.get('/json', (req, res) => {
    let respond = "Hello json";
    if (process.env.MESSAGE_STYLE == "uppercase")
        respond = respond.toUpperCase();

    res.json({ "message": respond });
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ "time": req.time });
});

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word });
});

app.use(bodyParser.urlencoded({extended: false}));

app.route('/name')
    .get((req, res) => {
        let firstname = req.query.first;
        let lastname = req.query.last;
        res.json({ "name": `${firstname} ${lastname}` });
    })
    .post((req, res) => {
        let firstname = req.body.first;
        let lastname = req.body.last;
        res.json({ "name": `${firstname} ${lastname}` });
    });


































 module.exports = app;
