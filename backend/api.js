const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()
const GameModel = require("./gameschema")

// Connecting to database
const query =
  "mongodb+srv://admin:4GJHBxl0kUz3Tavw@cluster0.tmab720.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(query)

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = router
