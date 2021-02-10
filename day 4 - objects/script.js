let student1 = {
    name: "superman",
    age: 30,
    smoker: false,
    kidsName: ["rio", "flash"],
    pet: {
        name: "flash",
        age: 5,
        barks: true
    },
    portfolioPrinter: function () {
        console.log(`Here's my protfolio \n My name is ${this.name} and my age is ${this.age}. The name of my pet is ${this.pet.name}`);
    }
}

console.log(student1.name);
// console.log(student1["name"]);

student1.name = "catwoman";
console.log(`Name after update ${student1.name}`);
console.log(`Name of pet ${student1.pet.name}`);

student1.portfolioPrinter();