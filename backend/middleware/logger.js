const colors = require("@colors/colors")

function logger(req, res, next) {
  const methodColors = {
    GET: "green",
    POST: "blue",
    UPDATE: "yellow",
    DELETE: "red",
  }

  const color = methodColors[req.method] || white

  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ]
  )
  next()
}

module.exports = logger
