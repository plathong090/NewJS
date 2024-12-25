const kvArray = [
    {key: 1, value: 10},    
    {key: 2, value: 20},
    {key: 3, value: 30},
];

const reformatArr = kvArray.map(({key,value}) => ({[key]: value}));
console.log(reformatArr);
console.log(kvArray);