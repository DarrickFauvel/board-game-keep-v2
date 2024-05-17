const sqlite3 = require("sqlite3").verbose()

const tableName = "games"

/* -------------------------------------------------------------------------- */
/*                             Connect to database                            */
/* -------------------------------------------------------------------------- */
const db = new sqlite3.Database(
  "./keep.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message)
    }
  }
)

/* -------------------------------------------------------------------------- */
/*                                Create table                                */
/* -------------------------------------------------------------------------- */

const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY, name, bgg_url, image_url)`
db.run(sql, [], (err) => {
  if (err) {
    return console.error(err.message)
  }
})

module.exports = { db, tableName }
