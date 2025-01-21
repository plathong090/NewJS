function simplePair( data , r ) {
    let result = [];

    for (let item of data) {
        for(let item2 of data) {
            if(item!= item2) {
            let sum = item * item2;
                if (sum === r) {
                    return[item , item2];
                }                
            }
        }
    }
    return null;
}
console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));
