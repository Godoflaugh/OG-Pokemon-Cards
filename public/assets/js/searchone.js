//search by button enter
var input = document.getElementById("searchTerm")
if (input) {
  input.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
      event.preventDefault()
      //Code for search functionality goes here
      var inputValue = document.getElementById("searchTerm").value

      searchPokemons({ "name": inputValue })
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
            pokemonRenderEl.append(pokeElement)
            pokeElement.classList.add('renderCard')
          }
        })
    }
  })
}



//Click event

const searchButton = document.getElementById('searchBtn')
if (searchButton) {
  searchButton.onclick = function () {
    event.preventDefault()
    //Code for search functionality goes here
    var inputValue = document.getElementById("searchTerm").value

    searchPokemons({ "name": inputValue })
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
          pokemonRenderEl.append(pokeElement)
          pokeElement.classList.add('renderCard')
        }
      })
  }


})



//Click event handler

document.getElementById('searchBtn').onclick = function () {
  event.preventDefault()
  //Code for search functionality goes here
  var inputValue = document.getElementById("searchTerm").value

  searchPokemons({ "name": inputValue })
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
        pokemonRenderEl.append(pokeElement)
        pokeElement.classList.add('renderCard')
      }
    })

}



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