'use strict';

const mongoose = require('mongoose');
const Book = require("../models/bookModel");
mongoose.connect(process.env.DB_URI);

let updateBook = async (req, res) => {
  try {
    const {title, description, status, email} = req.body
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, {title, description, status, email}, { new: true, overwrite: true });
    res.status(201).send(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).send('server error');
  }
}

module.exports = updateBook;