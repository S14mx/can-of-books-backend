'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel.js');
const getBooks = require('./handlers/getBooks');


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

// making a database called books-database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

app.get('/books', getBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
