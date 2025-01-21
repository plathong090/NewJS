function removeDupe(n){
    var array = [];
    for(var  value of n) {
        if(array.indexOf(value) === -1) {
            array.push(value);
        }
    }
    return array;
}
console.log(removeDupe([1,0,1,0]));
console.log(removeDupe(["The", "big", "cat"]));
console.log(removeDupe(["John", "Taylor", "John"]));