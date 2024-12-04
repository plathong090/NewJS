const add = (a,b) => a + b;
console.log(add(1,2));

const sunstract = (a,b) => {
    const result = a-b;
    return result;
};
console.log(sunstract(4,2));


//arrowfn w/ 2 arguments
const sum = (firstParam , secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2,5));

///arrowfn w/ no arguments
const printHello = () => {
    console.log("hello");
};
printHello();

//arrowfn w/ a single arguments
const checkweight = (weight) => {
    console.log(`weight : ${weight} kg`)
};
checkweight(25);

//concise arrowfn
const multiply = (a,b) => a*b;
console.log(multiply(2,30));