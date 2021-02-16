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
    xhrObj.open("GET", "https://swapi.devi/api/people/1/");

    // Actually, sending the request
    xhrObj.send();
}

function someFunction(yousef) {
    // console.log(resp.target.response);
    let respObject = JSON.parse(yousef.target.response);
    // console.log(respObject);

    let containerEl = document.getElementById("container");
    containerEl.innerText = respObject.name;
    // containerEl.innerText = resp.target.response

    // respObject.height
}

function errorHandler(err) {
    alert("Something went wrong. Please try again later");
}