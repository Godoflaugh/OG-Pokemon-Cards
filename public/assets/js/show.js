
async function getPokemon() {
  try {
    const response = await fetch('/api/pokemons/all')
    return response.json()
  } catch (err) {
    console.error(err)
  }
}

getPokemon()
  .then(pokemon => {
    console.log(pokemon)
    //for loop to populate the pokemon data
    for (var i = 0; i < pokemon.length; i++) {

      const pokeElement = document.createElement('div')
      pokeElement.innerHTML = `
      <p>Name: ${pokemon[i].name}</p>
      <p>ID: ${pokemon[i].id}</p>
      <p>Type: ${pokemon[i].type}</p>
      <p>Weakness: ${pokemon[i].weakness}</p>
      <p>Health: ${pokemon[i].Health}</p>
      <img src="${pokemon[i].image_url}" style="width:150px; height:150px;"></img>
      <p>Summary: ${pokemon[i].summary}</p>
      <hr>
      `
      // window.onload = function () { window.location.reload() }
      document.getElementById("pokemonRender").append(pokeElement)
      // document.getElementById("image").setAttribute("src", pokemon[i].image_url)
      pokeElement.classList.add('renderCard')
    }
  })
  // .catch(err => console.error(err))


  // document.getElementById("pokemon_name").innerText = pokemon[0].name
    // document.getElementById("pokemon_id").innerText = pokemon[0].id
    // document.getElementById("pokemon_type").innerText = pokemon[0].type
    // document.getElementById("pokemon_weakness").innerText = pokemon[0].weakness
    // document.getElementById("pokemon_health").innerText = pokemon[0].Health
    // document.getElementById("pokemon_summary").innerText = pokemon[0].summary
    // document.getElementById("pokemon_image").setAttribute("src", pokemon[0].image_url)