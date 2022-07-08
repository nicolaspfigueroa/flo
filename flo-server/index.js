var express = require('express');
var app = new express();
var Router = require('./router/router');
var cors = require('cors');
var NODE_ENV = process.env.NODE_ENV;
var PORT = 3030; //TODO: get port from environment variable (NPM dotenv)
var DB_URL = NODE_ENV === 'test'
    ? "mongodb://localhost:27017/test"
    : "mongodb://localhost:27017/flo";
var mongoose = require('mongoose');
mongoose.connect(DB_URL).then(function () {
    console.log('Connected to DB 🗺');
});
app.use(cors());
app.use(express.json());
app.use(Router);
var server = app.listen(PORT, function () {
    console.log("Server listen on port ".concat(PORT, " \uD83D\uDDFA"));
});
module.exports = { app: app, server: server };
