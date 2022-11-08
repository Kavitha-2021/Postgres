const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    age: Number
});


var Book = mongoose.model("Book", bookSchema);


module.exports = Book;

