DROP DATABASE IF EXISTS pokemon_db;
CREATE DATABASE pokemon_db;


USE pokemon_db;
CREATE TABLE pokemon_gen1 (
ID int NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
imageURL VARCHAR (255) NOT NULL,
type VARCHAR (30) NOT NULL,
summary VARCHAR (255) NOT NULL
);


INSERT INTO pokemon_gen1 (ID, name, imageURL, type, summary)
VALUES (001, "Bulbasaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", "Grass", "A strange seed was planted on its back at birth. The plant sprouts and grows with this pokemon"),
(002, "Ivysaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png", "Grass", "When the bulb on its back grows large, it appears to lose the ability to stand on it's hind legs."),
(003, "Venusaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png", "Grass", "It's plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."),
(004, "Charmander", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", "Fire", "It has a preference for hot things. When it rains, steam is said to spout from the tip of it's tail."),
(005, "Charmeleon", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png", "Fire", "It has a barbaric nature. In battle, it whips it's fiery tail around and slashes away with sharp claws."),
(006, "Charizard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png", "Fire", "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."),
(007, "Squirtle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", "Water", "When it retracts it's long neck into it's shell, it squirts out water with vigorous force."),
(008, "Wartortle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png", "Water", "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old."),
(009, "Blastoise", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png", "Water", "It crushes its foe under it's heavy body to cause fainting. In a pinch, it will withdraw inside its shell."),
(025, "Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", "Electric", "Pikachu that can geerate powerful electricity have cheek sacs that are extra soft and super stretchy.");