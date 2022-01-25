'use strict';

const mongoose = require('mongoose');
const Book = require("../models/bookModel");
mongoose.connect(process.env.DB_URI);

let addBook = async (req, res) => {
  try {
    const result = await Book.create(req.body);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('server error');
  }
}

module.exports = addBook;