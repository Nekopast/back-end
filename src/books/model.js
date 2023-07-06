const mongoose = require("mongoose");

// Book:
//     id: string - automatically created
//     title: string   
//     author: string
//     genre: string

const bookSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
        unique: false
    },
    genre: {
        type: String,
        required: true,
        unique: false
    }
});

const Book = mongoose.model("book", bookSchema);
module.exports = Book;