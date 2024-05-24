const express = require("express")
const router = express.Router()

const { db, tableName } = require("../connect.js")

/* -------------------------------------------------------------------------- */
/*                                Get all games                               */
/* -------------------------------------------------------------------------- */
router.get("/", (req, res) => {
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
router.get("/:id", (req, res) => {
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
router.post("/", (req, res) => {
  if (Object.entries(req.body).length === 0) {
    console.log(`req.body object is empty`)
    return res.status(400).send("req.body object is empty")
  }

  const { name, bgg_url, image_url, location, is_favorite } = req.body
  const sql = `INSERT INTO ${tableName} (name, bgg_url, image_url, location, is_favorite) VALUES (?,?,?,?,?)`

  db.run(sql, [name, bgg_url, image_url, location, is_favorite], (err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: `Could not create entry for "${name}"` })
    }

    console.log(`New entry, ${name}, created`)
    res.status(201).json({
      message: `New entry, ${name}, has been created`,
    })
  })
})

/* -------------------------------------------------------------------------- */
/*                                Delete a game                               */
/* -------------------------------------------------------------------------- */
router.delete("/:id", (req, res) => {
  const { id } = req.params

  const sql = `DELETE FROM ${tableName} WHERE id = ?`
  db.run(sql, [id], (err) => {
    if (err) {
      return res.status(500).json({
        message: `Could not delete entry with ID = ${id}`,
      })
    }
    return res.status(200).json({
      message: `Entry with ID = ${id} deleted`,
    })
  })
})

module.exports = router
