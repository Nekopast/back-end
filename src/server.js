// //To import express
// const {response} = require ("express")
const express = require("express");
const app = express();
const Book = require("./books/model");

require("dotenv").config();
require("./db/connection");

// const app = express()

// const Book = require("./books/model")

app.use(express.json())
app.get("/books", (request, response) => {
    const book = {
        title: "No Game No Life",
        author: "Forgot",
        genre: "anime"
    } 
    const successResponse = {
        message: "Response sent successfully",
        book: book
    }
    response.send(successResponse);
})

app.get("/books/getallbooks", async (req, res) => {
    try {

        const books = await Book.find({})

        const successResponse = {
            message: "Success",
            books: books
        }
        
        res.status(200).json(successResponse)
    } catch (error) {
        console.log(error)
    }
})

app.post("/books/addbook", async (request, response) => {
    // response.send("Hello from the post route.")
    console.log(request.body)
    const newBook = await Book.create({
        id: Math.floor(Math.random()*50),  //
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    })
    const successResponse = {
        message: "New book successfully added.",
        newBook: newBook
    }
    response.send(successResponse)
    // const newBook = await Book.create({
    //     title: "Harry Potter and the Chamber of Secrets",
    //     author: "J.K. Rowling",
    //     genre: "Fantasy"
    // })
})

app.put("/books", async (request, response) => {
    response.send("Hello from the update route.")
    console.log(request.body)
    const newBook = {
        id: Math.floor(Math.random()*50),
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    }
    const successResponse = {
        message: "New book successfully added.",
        newBook: newBook
    }
    response.send(successResponse)
    // const newBook = await Book.create({
    //     title: "Harry Potter and the Chamber of Secrets",
    //     author: "J.K. Rowling",
    //     genre: "Fantasy"
    // })
})



app.delete('/books', (req, res) => {
    response.send("DELETE Request Called")
    console.log(request.body)
})

app.delete("/books", async (request, response) => {
    response.send("Hello from the delete route.")
    console.log(request.body)
    const newBook = {
        id: Math.floor(Math.random()*50),
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    }
    const successResponse = {
        message: "Book successfully removed.",
        newBook: newBook
    }
    response.send(successResponse)
    // const newBook = await Book.create({
    //     title: "Harry Potter and the Chamber of Secrets",
    //     author: "J.K. Rowling",
    //     genre: "Fantasy"
    // })
})

// app.get("/anotherRoute", (request, response) =>
// {
//     response.send("Hello from ANOTHER route")
// })

// app.use("/book", express.static("book")) 
// app.use("/", express.static("anotherRoute"))
// app.use("/gaming", express.static("gaming"))
// app.use("/anime", express.static("anime"))

app.listen(5004, () => console.log("Server is listening"))