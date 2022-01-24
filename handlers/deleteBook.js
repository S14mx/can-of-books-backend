'use strict';

const mongoose = require('mongoose');
const Book = require("../models/bookModel");
mongoose.connect(process.env.DB_URI);

let deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    let deletedBook = await Book.findByIdAndDelete(id);
    console.log(deletedBook);
    res.status(202).send('Book has been deleted')
  } catch (error) {
    console.log(error);
    res.status(404).send('Unable to delete book')
  }
  
}

module.exports = deleteBook;