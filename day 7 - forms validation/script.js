let students = [];

function addStudent() {
    let sNameEl = document.getElementById("sname");
    let sNameValue = sNameEl.value;

    let ageEl = document.getElementById("age");
    let ageValue = ageEl.value;

    let hobbyEl = document.getElementById("hobby");
    let hobbyValue = hobbyEl.value;

    if (ageValue === "") {
        alert("Hey! You have not provided the value of age");
        return false;
    }
}

