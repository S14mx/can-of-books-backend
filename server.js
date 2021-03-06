'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel.js');
const getBooks = require('./handlers/getBooks');
const addBook = require('./handlers/addBook');
const deleteBook = require('./handlers/deleteBook');
const updateBook = require('./handlers/updateBook');
const getUser = require('./handlers/getUser');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

// making a database called books-database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

app.get('/books', getBooks);
app.post('/books', addBook);
app.delete('/books/:id', deleteBook);
app.put('/books/:id', updateBook)
app.get('/user', getUser)

app.listen(PORT, () => console.log(`listening on ${PORT}`));


