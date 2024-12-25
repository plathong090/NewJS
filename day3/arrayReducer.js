const arr = [15,16,17,18,19];

function reducer(accumulator , currentValue, index) {
    const backvalue = accumulator  + currentValue;
    
    console.log(
        `accumalator  : ${accumulator},
        currentValue : ${currentValue},
        index : ${index},
        backvalue  : ${backvalue}`
    );
    return backvalue;
}
arr.reduce(reducer);