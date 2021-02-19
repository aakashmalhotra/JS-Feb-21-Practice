//  the foo object

const foo = {
    name: "pikachu",
    powers: [
        "hammer",
        "electrify",
        "bubbles",
        "axe",
        "drill"
    ],
    trainer: {
        name: "Ash",
        height: 120,
        hobbies: [
            "moto",
            "cards"
        ],
        numberOfpokemons: 20,
        clothes: {
            tshirtColor: "white",
            jeans: "blue",
            cap: "baseball cap",
            shoeColorAvailable: [
                "red",
                "white",
                "green"
            ]
        }
    },
    numberOfBattles: 300,
    battlesWOn: 250,
};

// Save the shoe colors array in a variable for easy access
let shoeColors = foo.trainer.clothes.shoeColorAvailable;

// get container el
const containerEl = document.getElementById("container");

// Iterate over all the shoes
shoeColors.forEach(shoeColor => {
    // Create a new div
    const newDivEl = document.createElement("div");
    // Set the text
    newDivEl.innerText = shoeColor;
    // append it to parent element
    containerEl.appendChild(newDivEl);
})



