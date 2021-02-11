function changeTheHeaderColor() {
    let headingEl = document.getElementById("heading");
    headingEl.style = "color: red; font-size:60px;";
    headingEl.style = "padding: 20px;" // overides the properties from before

    headingEl.style.color = "red";
    headingEl.style.fontSize = "60px";
}

// function changeTheHeaderColor() {
//     document.getElementById("heading").style = "color: red";
// }
