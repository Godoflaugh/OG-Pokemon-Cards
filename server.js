//Pulling in modules
const express = require("express")
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const router = require("./routes")
const sequelize = require('./config/connection')

const { Pokemon, User } = require('./models')

const PORT = process.env.PORT || 3001

//Express server started
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

// Use express-session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 3600 * 1000, // 1 hour
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
}))

//Turn on Routes
app.use(router)

run()

//Turn on connection to db and server
async function run() {
  await sequelize.sync({ force: false });

  // Run express backend
  app.listen(PORT, () => console.log("Now Listening", PORT))

  
}