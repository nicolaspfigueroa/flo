var Express = require('express');
var app = new Express();
var router = require('./router/router');
var cors = require('cors');
var PORT = 3030; //TODO: get port from environment variable (NPM dotenv)
var DB_URL = 'mongodb://localhost:27017/flo';
var mongoose = require('mongoose');
mongoose.connect(DB_URL).then(function () {
    console.log('Connected to DB 🗺');
});
app
    .use(cors())
    .use(Express.json())
    .use(router)
    .listen(PORT, function () {
    console.log("Server listen on port ".concat(PORT, " \uD83D\uDDFA"));
});
