const pokemonContainer = document.querySelector(".pokemon-container");
 
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        createPokemon(data)
    });
}
 
function fetchPokemons(number){
    for (let i = 1; i <= number; i++){
        fetchPokemon(i);
    }
}
 
function createPokemon(pokemon) {
    const card = document.createElement("div");
    card.classList.add("pokemon-block");
 
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");
 
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
 
    spriteContainer.appendChild(sprite);
 
    const number = document.createElement("p");
    number.textContent = `${pokemon.id}`;
 
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;
 
    const removeButton = document.createElement("button");
    removeButton.textContent = "Quitar de Favoritos";
    removeButton.classList.add("remove-button");
 
  // Agregar el botón de eliminar a la tarjeta de pokémon
  card.appendChild(removeButton);
  pokemonContainer.appendChild(card);
 
  // Obtener todos los botones de eliminar
  const removeButtons = document.querySelectorAll(".remove-button");
 
  // Escuchar el evento click en cada botón de eliminar
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Eliminar el elemento padre (la tarjeta de pokémon) del DOM
      event.target.parentElement.remove();
    });
  });
 
 
    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    pokemonContainer.appendChild(card);
   
  }
 
  fetchPokemons(5);
