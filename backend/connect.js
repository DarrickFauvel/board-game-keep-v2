/* -------------------------------------------------------------------------- */
/*                             Connect to database                            */
/* -------------------------------------------------------------------------- */

const { MongoClient, ServerApiVersion } = require("mongodb")
const uri =
  "mongodb+srv://admin:4GJHBxl0kUz3Tavw@cluster0.tmab720.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    // Connect the client to the server
    await client.connect()
    console.log("Connected to MongoDB database.")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)

/* -------------------------------------------------------------------------- */
/*                                Create document                             */
/* -------------------------------------------------------------------------- */

async function createGame(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing)
  console.log(`New listing created with the following id: ${result.insertedId}`)
}

// const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY, name, bgg_url, image_url)`
// db.run(sql, [], (err) => {
//   if (err) {
//     return console.error(err.message)
//   }
// })

/* -------------------------------------------------------------------------- */
/*                             Add column to table                            */
/* -------------------------------------------------------------------------- */
// const addColumnToTable = (columnName, columnType) => {
//   const sql = `ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType.toUpperCase()}`
//   db.run(sql, [], (err) => {
//     if (err) {
//       return console.error(err.message)
//     }
//   })
// }
// addColumnToTable("is_favorite", "integer")

// module.exports = { db, tableName }
