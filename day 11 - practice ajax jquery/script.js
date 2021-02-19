function getPokemon() {

    // fetch value from the text box
    const textboxEl = document.getElementById("poke");
    const pokemonName = textboxEl.value;

    //  Make Ajax call using the fetched value
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

    $.ajax(url).done(respHandler);
}

function respHandler(resp) {
    // Display the data received
    const containerDivEl = document.getElementById("container");
    containerDivEl.innerHTML = "";
    const newDivEl = document.createElement("p");
    newDivEl.innerText = resp.name;
    containerDivEl.appendChild(newDivEl);

    const imageLink = resp.sprites.front_default; // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", imageLink);

    containerDivEl.appendChild(imgEl);

}