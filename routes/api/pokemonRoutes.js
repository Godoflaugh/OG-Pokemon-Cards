const router = require('express').Router()
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { User, Pokemon } = require('../../models')

async function authMiddleware (req, res, next) {
    if (req.session.userId) next()
    else {
        res.status(400).json({ error: "Please log in to continue."})
    }
}

//Find all pokemon
router.get('/search', authMiddleware, async (req, res) => {
    const { name, type, summary } = req.query

    const foundPokemons = await Pokemon.findAll({
        where: {
            ...(name) && { name: {
                [Op.like]: `%${name}%`
            }},
            ...(type) && { type: {
                [Op.like]: `%${type}%`
            }},
            ...(summary) && { summary: {
                [Op.like]: `%${summary}%`
            }},
        }
    })

    res.status(200).json(foundPokemons)
})

// Get all favorite pokemons
router.get('/favorite', authMiddleware, async (req, res) => {
    const currUser = await User.findOne({
        where: { id: req.session.userId },
        include: [Pokemon]
    })

    res.status(200).json({ id: currUser.id, pokemons: currUser.pokemons })
})

// Set a new favorite pokemon
router.post('/favorite', authMiddleware, async (req, res) => {
    // Set relationship
    const currUser = await User.findOne({
        where: { id: req.session.userId },
        include: [Pokemon]
    })

    const { pokemonId } = req.body
    const pokemon = await Pokemon.findByPk(pokemonId)

    currUser.addPokemon(pokemon)

    res.status(200).json({ success: "true" })
})

// Set a new favorite pokemon
router.delete('/favorite', authMiddleware, async (req, res) => {
    // Set relationship
    const currUser = await User.findOne({
        where: { id: req.session.userId },
        include: [Pokemon]
    })

    const { pokemonId } = req.body
    const pokemon = await Pokemon.findByPk(pokemonId)

    currUser.removePokemon(pokemon)

    res.status(200).json({ success: "true" })
})

module.exports = router

