function highestDigit(num) {
    let text = num.toString().split('');
    let max = '0' ;
    for(let n = 0 ; n < text.length ; n++) {
        if(max < text[n]){ 
            max = text[n];
        }
    }
    return max;
} 


console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
