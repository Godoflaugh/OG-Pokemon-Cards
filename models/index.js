const Pokemon = require('./Pokemon');
const User = require('./User');

// Set up relationship between Pokemon and User (many to many)
Pokemon.belongsToMany(User, { through: 'pokemon_user' });
User.belongsToMany(Pokemon, { through: 'pokemon_user' });

module.exports = { Pokemon, User };