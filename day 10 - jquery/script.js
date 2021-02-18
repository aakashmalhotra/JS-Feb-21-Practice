function getData() {
    // const textBoxEl = document.getElementById("person");
    const textBoxEl = $("#person")[0];
    const personNumber = textBoxEl.value;
    const url = `https://swapi.dev/api/people/${personNumber}/`;

    $.ajax(url).done(respHandler).fail(errorHandler);
}

// Function to handle success
function respHandler(resp) {
    // $("#container") works like document.querySelector
    const containerEl = $("#container")[0];
    containerEl.innerHTML = "";

    const newNameDiv = document.createElement("div");
    newNameDiv.innerHTML = `<br>Name of the warrior = ${resp.name} <br><br>`;
    containerEl.appendChild(newNameDiv);

    resp.starships.forEach(starship => {
        const newStarShipDiv = document.createElement("div");
        newStarShipDiv.textContent = starship;
        containerEl.appendChild(newStarShipDiv);
    });
}

// Function to handle error
function errorHandler(err) {
    alert("Something went wrong. Please try again later. the error status was " + err.status);
}











