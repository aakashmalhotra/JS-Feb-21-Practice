// Create a website that tells how long it would take to double your
// money given a certain percentage of return per year.

function calcTime(event) {
    console.log(event);
    const returnOnInvEl = document.getElementById("returnOnInv");
    const returnOnInv = returnOnInvEl.value;

    const time = 72 / returnOnInv;
    //  72/number in the text box

    const cotainerEl = document.getElementById("container");
    cotainerEl.innerText = `Your money would double in ${time} years.`
    cotainerEl.innerText = "Your money would double in " + time + " years.";
}

function greet() {
    console.log("HO HO HO")
}

function checkEnterPressed(event) {
    console.log("key was pressed" + event.which);
    if (event.which === 13) {
        calcTime();
        greet();
    }
}
