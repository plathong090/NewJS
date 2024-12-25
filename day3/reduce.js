const arrayOfNum = [1,2,3,4];
const sum = arrayOfNum.reduce((accumulator,currentValue) => {
    return accumulator +  currentValue;
})
console.log(sum);