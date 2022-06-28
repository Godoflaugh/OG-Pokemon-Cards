//Pulling in modules
const express = require("express")
const router = require("./controllers/controllers.js")
const sequelize = require('./config/connection')


const PORT = process.env.PORT || 3001
const db = require("./models")

//Express server started
const app = express()
app.use(express.urlendcoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

//Turn on Routes
app.use(router)

//Turn on connection to db and server
db.sequelize.sync().then(( => {
  app.listen(PORT, () => console.log("Now Listening", PORT))
}))