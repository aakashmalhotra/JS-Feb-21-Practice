function functionForEachEl(studentName) {
    console.log(studentName);
}

let foo = ["flash", "batman", "superman"];
foo.forEach(functionForEachEl);


// ====================================

let bar = ["flash", "batman", "superman"];
foo.forEach(
    function (studentName) {
        console.log(studentName);
    }
);


foo.forEach((studentName) => { console.log(studentName) });

foo.forEach(studentName => console.log(studentName));


// ======================
//  Program to display all the numbers of an array multiplied by 3
// let foobar = [1,5,3] => 3 15 9

let foobar = [1, 5, 3];

foobar.forEach(num => console.log(num * 3));

foobar.forEach(function (num) {
    console.log(num * 3)
});

// ======================
//  Program to insert an element in between an array using splice

foobar.splice(1, 0, 87);
console.log(foobar);



// Some other methods

// concat
// filter
// sort
// find
// findIndex
// includes
// indexof
// reduce - difficult
