function numberSplit(num) {
    if (num === undefined) {

    }
    
    else {
        let a = Math.floor(num/2);
        let b = num - a;
        let c = [ ];
        c.push(a,b);
        return c ;
    }
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
