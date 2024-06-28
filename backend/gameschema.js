const mongoose = require("mongoose")

const GameSchema = new mongoose.Schema({
  GameId: Number,
  Name: String,
  BggImage: String,
  BggUrl: String,
})

module.exports = mongoose.model("game", GameSchema, "Games")
