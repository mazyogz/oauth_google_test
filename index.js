const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/config.local.js'); //Connect to database local

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('error'));

app.get('/', (req, res) => {
  res.send('Ok');
});

app.listen(5000 || process.env.PORT, () => {
  console.log('Server Started');
});