const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const countsRouter = require('./routes/counts');

const app = express();
const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening at Port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/vault_db');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', countsRouter);
