function namePrinter(name) {
    function starPrinter() {
        console.log("***********************");
    }

    starPrinter();
    console.log(name);
    starPrinter()
}
namePrinter("John");



let namePrinter1 = (name) => {
    // Defining function
    let starPrinter = () => console.log("***********************");

    starPrinter();
    console.log(name);
    starPrinter();
}
namePrinter1("John");

// Write a function named calculator which accepts three params:
// - operationType - possible values "add" and "subt"
// - num1
// - num2

// e.g: 
// calculator("add", 10, 5) => should output 15
// calculator("subt", 10, 5) => should output 5

function calculator(operationType, num1, num2, num3) {

    // Check the operationType if its add or subt
    // call the repective functions accordingly
    if (operationType === "add") {
        console.log(add(num1, num2));
    }
    else if (operationType === "subt") {
        console.log(subt(num1, num2));
    }
}
function balanceCalculator(previousBal, newDeposit) {
    add(previousBal, newDeposit);

}

// Define add function
function add(a, b) { return a + b };
// Define subt function
function subt(x, y) { return x - y };

calculator("add", 10, 5, 999);
calculator("subt", 10, 5, 777)


function calc(num1, num2) {
    let addedValue = add(num1, num2);
    let subtValue = subt(num1, num2);
    console.log(addedValue * subtValue);

    // console.log(add(num1, num2) * subt(num1, num2)); -> console.log(15 * 5) 
}


// ==================================

// Functions inside function 



function mainFunc() {
    function addvaluesToArray(studentsArrayTobeFilled) {
        studentsArrayTobeFilled.push("John");
        studentsArrayTobeFilled.push("Jane");
        studentsArrayTobeFilled.push("Flash");
        studentsArrayTobeFilled.push("Rio");
    }

    function pickARandomStudent(studentsWithValues) {
        return studentsWithValues[Math.floor(Math.random() * studentsWithValues.length)];
    }

    let students = [];
    addvaluesToArray(students);
    let randomStudent = pickARandomStudent(students);
    console.log(`The selected student is: ${randomStudent} And he/she is an awesome student.`)
    console.log("The selected student is: " + randomStudent + "And he/she is an awesome student.")
}
mainFunc();


// =================================

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* "
    }
    console.log(line + "\n");
}

makeLine(5);


// function buildTriangle(num) {

//     let i;

//     for (i = 1; i < num; i++) {
//         console.log(makeLine(i));
//     }
//     return 435677534875;
// }

// let returnedvalue = buildTriangle(20);