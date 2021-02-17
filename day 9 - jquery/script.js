function getStarWarsData() {
    // Make ajax GET request and tell what should happen on success and failure
    $.ajax("https://swapi.dev/api/peopleu/1/").done(someFunction).fail(errorHandler);
}

// Breaking down
function getStarWarsData() {
    let jqueryAjaxObj = $.ajax("https://swapi.dev/api/peopleu/1/");
    jqueryAjaxObj.done(someFunction);
    jqueryAjaxObj.fail(errorHandler);
}

// Function to handle success
function someFunction(resp) {
    // $("#container") works like document.querySelector
    let containerEl = $("#container")[0];
    containerEl.innerText = resp.name;
}

// Function to handle error
function errorHandler(err) {
    alert("Something went wrong. Please try again later. the error status was " + err.status);
}


// making your life more complicated - equivalent to everything above
// function getStarWarsData() {
//     $.ajax("https://swapi.dev/api/peopleu/1/").done(resp => {
//         let containerEl = $("#container")[0];
//         containerEl.innerText = resp.name;
//     }).fail(err => alert("Something went wrong. Please try again later. the error status was " + err.status));
// }