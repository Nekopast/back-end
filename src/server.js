//To import express
const express = require("express")

const app = express()

app.use("/books", express.static("books")) 
app.use("/", express.static("anotherRoute"))
app.use("/gaming", express.static("gaming"))
app.use("/anime", express.static("anime"))

app.listen(5001, () => console.log("Server is listening"))