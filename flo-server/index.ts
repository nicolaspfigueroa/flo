const express = require('express');
const app = new express();
const Router = require('./router/router');
const cors = require('cors');

const {NODE_ENV} = process.env;
const PORT = 3030; //TODO: get port from environment variable (NPM dotenv)
const DB_URL = NODE_ENV === 'test' 
 ? "mongodb://localhost:27017/test" 
 : "mongodb://localhost:27017/flo" 

const mongoose = require('mongoose');
mongoose.connect(DB_URL).then(() => {
  console.log('Connected to DB 🗺');
});

app.use(cors())
app.use(express.json())
app.use(Router)
const server =  app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT} 🗺`);
  });

module.exports = {app, server}
