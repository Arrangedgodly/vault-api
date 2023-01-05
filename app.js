const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const countsRouter = require('./routes/counts');

const app = express();
const { PORT = 3000, DATABASE = 'mongodb://localhost:27017/vault_db' } = process.env;

mongoose.connect(DATABASE);

app.listen(PORT, () => {
  console.log(`App listening at Port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/vault_db');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use('/', countsRouter);
