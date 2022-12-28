const lista = document.getElementById("selectPokemon")
const pokemonContenedor = document.getElementById("pokemonCard")

//fetch a la api
fetchPokemons()
function fetchPokemons() {
fetch('https://pokeapi.co/api/v2/generation/1/', {})
.then(response => response.json())
.then(data => {
const pokemons = data.pokemon_species
console.log(pokemons)
for (const index in pokemons) {
const option = document.createElement("option")
option.innerText = pokemons[index].name

option.value = pokemons[index].name

lista.append(option)
}
})
}

//seleccion pokemon
lista.addEventListener("change", (e) => {
pokemonContenedor.innerHTML = ""
const pokemonName = e.target.value;
const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
fetch(pokemonUrl)
.then(response => response.json())
.then(pokemon => {
const sectionCol = document.createElement("section")
sectionCol.classList.add("col-md-4")

const sectionCard = document.createElement("section")
sectionCard.classList.add("card")

const pokemonImageUrl = pokemon.sprites.other["official-artwork"]["front_default"];
const imgCard = document.createElement("img")
imgCard.classList.add("card-img-top")
imgCard.src = pokemonImageUrl

const bodyCard = document.createElement("section")
bodyCard.classList.add("card-body")

const textCard = document.createElement("h4")
textCard.classList.add("card-title", "text-center")
textCard.innerText = pokemon.name.toUpperCase()

const btnFavorito = document.createElement("input")
btnFavorito.classList.add("btn", "btn-primary", "w-100")
btnFavorito.type = "button"
btnFavorito.value = "Agregar Favorito"
btnFavorito.onclick = () => {
agregarFavorito(pokemon, textCard)
}

bodyCard.append(textCard)
bodyCard.append(btnFavorito)

sectionCard.append(imgCard)
sectionCard.append(bodyCard)

sectionCol.append(sectionCard)

pokemonContenedor.append(sectionCol)
});
})



function agregarFavorito(pokemon, textCard) {
const rpta = confirm("Añadir a favoritos?")
if (rpta === true) {
textCard.classList.add("bg-danger", "text-light")
//enviar el pokemon a la base de datos mongo


alert("Se añadio a favoritos")
}
}