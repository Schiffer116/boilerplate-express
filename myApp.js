let express = require('express');
require('dotenv').config();

let app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
    // res.send('Hello Express');
});

app.get('/json', (req, res) => {
    let message;
    if (process.env.MESSAGE_STYLE === 'uppercase')
        message = "HELLO JSON";
    else
        message = "Hello json";

    res.json({ "message": message});
});



































 module.exports = app;
