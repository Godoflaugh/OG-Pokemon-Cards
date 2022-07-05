//search by button enter
var input = document.getElementById("searchTerm")
input.addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    event.preventDefault()
    //Code for search functionality goes here
    var inputEl = document.getElementById("searchTerm").value

    getOnePokemon(inputEl)
      .then(pokemon => {

        const onePokeELem = document.createElement('div')

        onePokeELem.innerHTML = `
        <p>Name: ${pokemon.name}</p>
        <p>ID: ${pokemon.id}</p>
        <p>Type: ${pokemon.type}</p>
        <p>Weakness: ${pokemon.weakness}</p>
        <p>Health: ${pokemon.Health}</p>
        <img src="${pokemon.image_url}" style="width:150px; height:150px></img>
        <p>Summary: ${pokemon.summary}</p>
        <hr>
        `
        location.reload()
        document.getElementById("pokemonRender").append(onePokeELem)
      })

  }
})

async function getOnePokemon(term) {
  try {
    const response = await fetch(`/api/pokemons/` + term)
    return response.json()
  } catch (err) {
    console.error(err)
  }
}