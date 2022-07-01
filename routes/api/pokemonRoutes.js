const router = require('express').Router()
const { Pokemon } = require('../../models')

// This is the /api/pokemon end point

//Get and post methods for pokemon.
router.get('/', (req, res) => {
  //This is the base route to grab all pokemon data
  Pokemon.findAll({
    attributes: [
      'id',
      'name',
      'image_url',
      'type',
      'weakness',
      'HP',
      'summary',
    ]
  })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})