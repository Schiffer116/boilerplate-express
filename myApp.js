require('dotenv').config()
let express = require('express');

let app = express();

app.use('/public', express.static(__dirname + '/public'));

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



































 module.exports = app;
