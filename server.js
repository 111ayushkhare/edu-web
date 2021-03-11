// Importing external modules
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/home', (req, res) => {
    res.sendFile('frontend/routes/home.html', {root: __dirname});
});

app.listen(port);