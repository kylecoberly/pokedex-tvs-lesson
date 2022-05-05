const $pokemonList = document.querySelector(".pokemon-list")

fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(response => response.json()).then(pokemon => {
  Array(50)
    .fill("")
    .map(() => deserializePokemon(pokemon))
    .map(pokemonToListing)
    .forEach(addPokemonToPage)
})

function titleCase(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`
}

function pokemonToListing(pokemon) {
  const $div = document.createElement("div")
  $div.classList.add("pokemon-listing")
  $div.innerHTML = `
    <img src="${pokemon.imageUrl}" alt="${pokemon.name}" />
    <p>${pokemon.name}</p>
  `
  return $div
}

function addPokemonToPage($pokemon) {
  $pokemonList.append($pokemon)
}

function deserializePokemon(pokemon) {
  return {
    name: titleCase(pokemon.name),
    imageUrl: pokemon.sprites.front_default,
  }
}
