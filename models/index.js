const Pokemon = require('./Pokemon');
const Deck = require('./Deck');

// Set up relationship between Pokemon and Deck (many to many)
Pokemon.belongsToMany(Deck, { through: 'pokemon_deck' });
Deck.belongsToMany(Pokemon, { through: 'pokemon_deck' });

module.exports = { Pokemon, Deck };