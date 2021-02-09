// WAY 1
// function add(num1, num2) {
//     let num3 = num1 + num2;
//     return num3;
// }

// let sum = add(5, 10);
// console.log(sum);


// WAY 2
function add(num1, num2) {
    return num1 + num2;
}

console.log("Way 2 = " + add(5, 10)); // ---> in between = console.log(15)


// WAY 3
let add1 = (num1, num2) => {
    let num3 = num1 + num2;
    return num3;
}
console.log("Way 3 = " + add1(5, 10));

// WAY 4
let add2 = (num1, num2) => { return num1 + num2; }
console.log("Way 4 = " + add2(5, 10));

// WAY 5
let add3 = (num1, num2) => num1 + num2;
console.log("Way 5 = " + add3(5, 10));

// Way 6
let add4 = function (num1, num2) { return num1 + num2 };
console.log("Way 6 = " + add4(5, 10));

// Way 7
let add5 = function (num1, num2) {
    let num3 = num1 + num2;
    return num3;
};
console.log("Way 7 = " + add5(5, 10));




