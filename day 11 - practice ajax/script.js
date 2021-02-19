function getPokemon() {

    // fetch value from the text box
    const textboxEl = document.getElementById("poke");
    const pokemonName = textboxEl.value;

    //  Make Ajax call using the fetched value
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url);
    httpRequest.onload = respHandler;
    // httpRequest.onerror = errorHandler;
    httpRequest.send();

}

function respHandler(resp) {
    // Display the data received
    const respJson = resp.target.response;
    const respObject = JSON.parse(respJson);

    const containerDivEl = document.getElementById("container");
    containerDivEl.innerHTML = "";

    const newDivEl = document.createElement("p");
    newDivEl.innerText = respObject.name;
    containerDivEl.appendChild(newDivEl);



}