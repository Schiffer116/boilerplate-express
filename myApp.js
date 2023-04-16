let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public/style.css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
    // res.send('Hello Express');
});



































 module.exports = app;
