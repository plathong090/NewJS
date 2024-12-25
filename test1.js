let values1 =['Apple' , 1 , false];
let values2 =['Fries' , 2 ,true];
let values3 =['Mars' , 9 ,'Apple'];

function findvalue(a,b,c) {
    return a.filter(item => b.includes(item) && c.includes(item));
}

const value = findvalue(values1,values2,values3);
console.log(value);