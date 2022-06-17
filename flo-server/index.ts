const Express = require('express');
const app = new Express();
const router = require('./router/router');
const cors = require('cors');

const PORT = 3030; //TODO: get port from environment variable (NPM dotenv)
const DB_URL = 'mongodb://localhost:27017/flo';

const mongoose = require('mongoose');
mongoose.connect(DB_URL).then(() => {
  console.log('Connected to DB 🗺');
});

app
  .use(cors())
  .use(Express.json())
  .use(router)
  .listen(PORT, () => {
    console.log(`Server listen on port ${PORT} 🗺`);
  });
