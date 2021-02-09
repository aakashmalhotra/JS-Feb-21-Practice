// for

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// // console.log(i);



// let j = 0;
// for (j = 0; j < 10; j++) {
//     console.log(j);
// }
// console.log(j);



// while

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while

let j = 0;
do {
    j++;
    console.log(j);
}
while (-5)




// nested for loop

// for (let rows = 0; rows <= 4; rows++) {
//     let str = "";

//     for (let col = 0; col < rows + 1; col++) {
//         str = str + "*";
//     }

//     console.log(str);
// }


// With function

function starGiver(numberOfStars) {
    let str = "";
    for (let col = 0; col < numberOfStars; col++) {
        str = str + "*";
    }
    return str;
}

for (let rows = 0; rows <= 4; rows++) {
    let stringy = starGiver(rows + 1);
    console.log(stringy);
}



// *        ->0
// **       ->1
// ***      ->2
// ****
// *****


//     *
//    **
//   ***
//  ****
// *****


// let age =20;
// let canDrinkVar = age > 18? "Can drink" : "Cannot drink";


// let age = 20;
// let canDrinkVar;

// if (age > 18) {
//     canDrinkVar = "Can drink";
// }
// else {
//     canDrinkVar = "Cannot drink";
// }

