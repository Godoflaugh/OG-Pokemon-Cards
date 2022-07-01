const router = require('express').Router()
const userRoutes = require('./userRoutes')
const pokemon = require('./pokemonRoutes')

// router.use('/pokemon', pokemon)
router.use('/users', userRoutes)

module.exports = router