//search by button enter
var input = document.getElementById("searchTerm")
// input.addEventListener('keypress', function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault()
//     //Code for search functionality goes here
//     var inputEl = document.getElementById("searchTerm").value


//     getOnePokemon(inputEl)
//       .then(pokemon => {

//         const onePokeELem = document.createElement('div')

//         onePokeELem.innerHTML = `
//         <p>Name: ${pokemon.name}</p>
//         <p>ID: ${pokemon.id}</p>
//         <p>Type: ${pokemon.type}</p>
//         <p>Weakness: ${pokemon.weakness}</p>
//         <p>Health: ${pokemon.Health}</p>
//         <img src="${pokemon.image_url}" style="width:150px; height:150px;"></img>
//         <p>Summary: ${pokemon.summary}</p>
//         <hr>
//         `

//         console.log(onePokeELem)
//         // location.reload()
//         const pokemonRenderEl = document.getElementById("pokemonRender")
//         // Clear previous results
//         pokemonRenderEl.innerHTML = ""
//         pokemonRenderEl.append(onePokeELem)
//       })

//   }
// })

input.addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    event.preventDefault()
    //Code for search functionality goes here
    var inputValue = document.getElementById("searchTerm").value

    searchPokemons({"name": inputValue})
      .then(pokemons => {

        console.log(pokemons)
        const pokemonRenderEl = document.getElementById("pokemonRender")
        pokemonRenderEl.innerHTML = ""

        //for loop to populate the pokemon data
        for (var i = 0; i < pokemons.length; i++) {

          const pokeElement = document.createElement('div')
          pokeElement.innerHTML = `
          <p>Name: ${pokemons[i].name}</p>
          <p>ID: ${pokemons[i].id}</p>
          <p>Type: ${pokemons[i].type}</p>
          <p>Weakness: ${pokemons[i].weakness}</p>
          <p>Health: ${pokemons[i].Health}</p>
          <img src="${pokemons[i].image_url}" style="width:150px; height:150px;"></img>
          <p>Summary: ${pokemons[i].summary}</p>
          <hr>
          `
          // window.onload = function () { window.location.reload() }
          pokemonRenderEl.append(pokeElement)
          // document.getElementById("image").setAttribute("src", pokemon[i].image_url)

        }
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

async function searchPokemons(searchQueryObject) {
  try {
    const response = await fetch("/api/pokemons/search?" + new URLSearchParams(searchQueryObject))
    return response.json()
  } catch (err) {
    console.error(err)
  }
}