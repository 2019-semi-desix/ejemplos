const express = require('express')
const app = express()
const connectDb = require('./mongoose');

const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
});

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
});
