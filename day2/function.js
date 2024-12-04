function printHello(name) {
    console.log("Hello "  + name);
    return name + " hello";
}
console.log(printHello.name);

let result = printHello("Me !");
console.log(result + "\n");

//assigned variable
let plusFive = (num) => {
    return num + 5;
};
let f = plusFive;
console.log(plusFive(3));
console.log(f(9));