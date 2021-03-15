// Importing external modules
const express = require('express');
const http = require('http'); 

const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./app'))


const server = http.createServer(app);
server.listen(port);