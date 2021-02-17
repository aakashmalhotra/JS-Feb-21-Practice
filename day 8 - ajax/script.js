
let containerEl = document.getElementById("container");

function getStarWarsData() {

    // request the data

    // Create a new XHR object
    let xhrObj = new XMLHttpRequest();

    // tell what should happen when the result loads
    // xhrObj.addEventListener("load", someFunction);
    xhrObj.onload = someFunction;
    // the above two lines do the same thing

    xhrObj.onerror = errorHandler;

    // Tell what kind of req to be made and where
    xhrObj.open("GET", "https://swapi.dev/api/people/1/");

    // Actually, sending the request
    xhrObj.send();
}

function someFunction(resp) {
    // console.log(resp.target.response);
    let respObject = JSON.parse(resp.target.response);
    // console.log(respObject);
    containerEl.innerText = respObject.name;
}

function errorHandler(err) {
    alert("Something went wrong. Please try again later. the error status was " + err.target.status);
}
