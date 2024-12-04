function equation(str) {
    const result = eval(str);
    return result;
}

console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));