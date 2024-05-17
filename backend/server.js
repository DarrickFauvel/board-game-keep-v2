const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { db, tableName } = require("./connect.js")

const port = 5000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/api/games", (req, res) => {
  /* -------------------------------------------------------------------------- */
  /*                                Get all games                               */
  /* -------------------------------------------------------------------------- */
  const sql = `SELECT * FROM ${tableName}`

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.json({ status: 400, success: false })
    }
    if (rows.length < 1) {
      return res.json({
        status: 400,
        success: false,
        message: `No data found`,
      })
    }
    return res.json(rows)
  })
})

/* -------------------------------------------------------------------------- */
/*                               Get game by id                               */
/* -------------------------------------------------------------------------- */
app.get("/api/games/:id", (req, res) => {
  const { id } = req.params
  const sql = `SELECT * from ${tableName} WHERE id = ?`

  db.all(sql, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    if (row < 1) {
      return res.status(404).json({ error: "Game not found" })
    }
    return res.json(row)
  })
})

/* -------------------------------------------------------------------------- */
/*                               Insert new game                              */
/* -------------------------------------------------------------------------- */
app.post("/api/games", (req, res) => {
  const { name, bgg_url, image_url } = req.body
  const sql = `INSERT INTO ${tableName} (name, bgg_url, image_url) VALUES (?,?,?)`

  db.run(sql, [name, bgg_url, image_url], (err) => {
    if (err) {
      return res.status(500).json({ message: "Could not create entry" })
    }

    // res.status(201).json({
    //   message: `New entry, ${name}, has been created`,
    // })
    res.sendFile(__dirname + "/public/success.html")
  })
})

/* -------------------------------------------------------------------------- */
/*                                Delete a game                               */
/* -------------------------------------------------------------------------- */
app.delete("/api/games", (req, res) => {
  const { id } = req.body

  const sql = `DELETE FROM ${tableName} WHERE id = ?`
  // db.run(sql, [id], (err) => {
  //   if (err) {
  //     return res.status(500).json({
  //       message: `Could not delete entry with ID = ${id}`,
  //     })
  //   }
  //   return res.status(200).json({
  //     message: `Entry with ID = ${id} deleted`,
  //   })
  // })
})

/* -------------------------------------------------------------------------- */
/*                         Listen for server requests                         */
/* -------------------------------------------------------------------------- */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
