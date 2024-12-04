function reverseString(value) {
    let reverseValue = "";

    value.split("").forEach((char) => {
        reverseValue = char + reverseValue;
    });
    return reverseValue
}
console.log(reverseString("Reverse Me"));

function reverseStr(Value) {
    const reverseValue = Value.split('').reverse().join('')
    return reverseValue;
}
console.log(reverseStr("Hello JS"));