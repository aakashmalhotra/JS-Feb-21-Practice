

function getData() {
    // const textBoxEl = document.getElementById("person");
    const textBoxEl = $("#pokemon")[0];
    const pokemonNumber = textBoxEl.value;

    // const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber;

    $.ajax(url).done(respHandler);
}

// Function to handle success
function respHandler(resp) {
    const containerEl = $("#container")[0];
    containerEl.innerHTML = "";

    // console.log(resp);
    // console.log(resp.name);

    const divEl = document.createElement("div");
    divEl.innerText = "Name = " + resp.name;
    containerEl.appendChild(divEl);
    const abilitiesArray = resp.abilities;

    console.log(abilitiesArray);

    abilitiesArray.forEach(element => {
        const ability = element.ability;

        const newDivEl = document.createElement("div");
        newDivEl.innerText = ability.name;

        containerEl.appendChild(newDivEl);
    });


}