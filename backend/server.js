const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const games = require("./routes/games")

const app = express()

const PORT = 5000

// app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
)
app.use("/api/games", games)

/* -------------------------------------------------------------------------- */
/*                         Listen for server requests                         */
/* -------------------------------------------------------------------------- */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
