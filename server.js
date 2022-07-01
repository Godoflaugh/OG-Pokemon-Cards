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
  saveUninitialized: true,
  cookie: {
    maxAge: 3600 * 1000, // 1 hour
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

  // Test to see all current pokemons
  // const pokemons = await Pokemon.findAll();
  // console.log(pokemons);

  // Test to create a deck
  // const newDeck = await Deck.create({ name: "Deck 1"})
  // const decks = await Deck.findAll();

  // Test to put a card into a deck
  // const pikachu = await Pokemon.findByPk(25)
  // const deck1 = await Deck.findByPk(1)
  // console.log(pikachu)
  // console.log(deck1)
  // await pikachu.addDecks([deck1])

  // Test to show all pokemons belonging to a deck

  // const decks = await Deck.findAll({include: [{ model: Pokemon }]})
  // console.log(decks)

}