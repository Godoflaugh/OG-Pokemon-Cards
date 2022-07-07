CREATE DATABASE pokemon_db;
USE pokemon_db;

CREATE TABLE pokemon (
ID int NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
image_url VARCHAR (255) NOT NULL,
type VARCHAR (30) NOT NULL,
weakness VARCHAR (50) NOT NULL,
Health int NOT NULL,
summary VARCHAR (255) NOT NULL
);


INSERT INTO pokemon (ID, name, image_url, type, weakness, Health, summary)
VALUES (001, "Bulbasaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", "Grass", "Fire, Ice, Flying, and Psychic", 45, "A strange seed was planted on its back at birth. The plant sprouts and grows with this pokemon"),
(002, "Ivysaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png", "Grass", "Fire, Ice, Flying, and Psychic", 60, "When the bulb on its back grows large, it appears to lose the ability to stand on it's hind legs."),
(003, "Venusaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png", "Grass", "Fire, Ice, Flying, and Psychic", 80, "It's plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."),
(004, "Charmander", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", "Fire", "Water, Ground, Rock", 39, "It has a preference for hot things. When it rains, steam is said to spout from the tip of it's tail."),
(005, "Charmeleon", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png", "Fire", "Water, Ground, Rock", 58, "It has a barbaric nature. In battle, it whips it's fiery tail around and slashes away with sharp claws."),
(006, "Charizard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png", "Fire", "Water, Ground, Rock", 78, "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."),
(007, "Squirtle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", "Water", "Electric, Grass", 44, "When it retracts it's long neck into it's shell, it squirts out water with vigorous force."),
(008, "Wartortle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png", "Water", "Electric, Grass", 59, "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old."),
(009, "Blastoise", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png", "Water", "Electric, Grass", 79, "It crushes its foe under it's heavy body to cause fainting. In a pinch, it will withdraw inside its shell."),
(010, "Caterpie", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png", "Bug", "Fire, Flying, Rock", 45, "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls." ),
(011, "Metapod", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png", "Bug", "Fire, Flying, Rock", 50, "This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body." ),
(012, "Butterfree", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png", "Bug, Flying", "Fire, Electricity, Ice, Flying, Rock", 60, "In battle, it flaps its wings at high speed to release highly toxic dust into the air."),
(013, "Weedle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png", "Bug, Poison", "Fire, Flying, Psychic, Rock", 40, "Often found in forests, eating leaves. It has a sharp venomous stinger on its head."),
(014, "Kakuna", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png", "Bug, Poison", "Fire, Flying, Psychic, Rock", 45, "Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators."),
(015, "Beedrill", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png", "Bug, Poison", "Fire, Flying, Psychic, Rock", 65, "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail."),
(016, "Pidgey", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png", "Normal, Flying", "Electricity, Ice, Rock", 40, "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand."),
(017, "Pidgeotto", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png", "Normal, Flying", "Electricity, Ice, Rock", 63, "Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder."),
(018, "Pidgeot", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png", "Normal, Flying", "Electricity, Ice, Rock", 83, "When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP."),
(019, "Rattata", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png", "Normal", "Fighting", 30, "Bites anything when it attacks. Small and very quick, it is a common sight in many places."),
(020, "Raticate", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png", "Normal", "Fighting", 55, "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off."),
(021, "Spearow", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png", "Normal, Flying", "Electricity, Ice, Rock", 40, "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne."),
(022, "Fearow", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png", "Normal, Flying", "Electricity, Ice, Rock", 65, "With its huge and magnificent wings, it can keep aloft without ever having to land for rest."),
(023, "Ekans", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png", "Poison", "Ground, Psychic", 35, "Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole."),
(024, "Arbok", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png", "Poison", "Ground, Psychic", 60, "It is rumored that the ferocious warning markings on its belly differ from area to area."),
(025, "Pikachu", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", "Electric", "Ground", 35, "Pikachu that can geerate powerful electricity have cheek sacs that are extra soft and super stretchy.");