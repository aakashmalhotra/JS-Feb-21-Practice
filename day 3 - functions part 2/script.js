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


