const router = require('express').Router()
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { User, Pokemon } = require('../../models')

async function authMiddleware(req, res, next) {
    if (req.session.userId) next()
    else {
        res.status(400).json({ error: "Please log in to continue." })
    }
}

//Find all pokemon
router.get('/search', authMiddleware, async (req, res) => {
    const { name, type, summary } = req.query

    const foundPokemons = await Pokemon.findAll({
        where: {
            ...(name) && {
                name: {
                    [Op.like]: `%${name}%`
                }
            },
            ...(type) && {
                type: {
                    [Op.like]: `%${type}%`
                }
            },
            ...(summary) && {
                summary: {
                    [Op.like]: `%${summary}%`
                }
            },
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


// Test Json for data retrieval
router.get('/all', (req, res) => {
    Pokemon.findAll({
        attributes: [
            'id',
            'name',
            'image_url',
            'type',
            'weakness',
            'Health',
            'summary',
        ]
    })
        .then(pokemonAll => res.json(pokemonAll))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

// Search by pokemon name
router.get('/:name', (req, res) => {
    Pokemon.findOne({
        where: {
            name: req.params.name
        },
        attributes: [
            'id',
            'name',
            'image_url',
            'type',
            'weakness',
            'Health',
            'summary',
        ]
    })
        .then(pokemonName => res.json(pokemonName))
        .catch(err => {
            console.log("Try again, name not found")
            res.status(500).json(err)
        })
})

router.post('/add', (req, res) => {
    //Create a new pokemon entry into the database
    Pokemon.create({
        id: req.body.id,
        name: req.body.name,
        image_url: req.body.image_url,
        type: req.body.type,
        weakness: req.body.weakness,
        Health: req.body.Health,
        summary: req.body.summary,
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router

