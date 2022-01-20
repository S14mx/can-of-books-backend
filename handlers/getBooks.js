'use strict';
const { response } = require('express');
const mongoose = require('mongoose');
const Book = require("../models/bookModel");
mongoose.connect(process.env.DB_URI);

let getBooks = async (req, res) => {
  try {
    let booksFromDB = await Book.find({});
    if (booksFromDB) res.status(200).send(booksFromDB);
    else res.status(404).send('no books found');
  } catch (err) {
    console.error(err);
    res.status(500).send('server error');
  }
}

module.exports = getBooks;