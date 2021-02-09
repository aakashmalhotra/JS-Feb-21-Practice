//  && condition

let age = 10;
let name = "John";
let profession = "teacher";

if (age > 16 && profession === "biker") {
    console.log("You are a cool guy");
}
else if (age < 16 && profession === "biker") {
    console.log("What a dumb decission");
}
else {
    console.log("Do something with your life");
}

// OR operator

if (age > 18 || profession === "teacher") {
    console.log("You are living your life");
}



// ! operator

if (age !== 18) {
    console.log("You are too young or too old")
}

if (!(age > 16 && profession === "biker")) {
    console.log("something");
}