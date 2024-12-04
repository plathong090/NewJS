let num1 = '150';
let flo1 = '1.50';

const test =[
    "******Converting str to int******",
    (parseInt('100')),
    (parseInt(num1)),
    (parseInt('ABC')),
    (parseInt('0xF')),

    "\n******Converting str to float******",
    (parseFloat('1.25abc')),
    (parseFloat(flo1)),
    (parseFloat('ABC')),
    
    "\n******More examples******",
    (parseInt('1.5')),
    (parseInt('1+1')),
    (parseInt(`${1+1}`)),

    "\n******Converting num to str******",
    (num1.toString()),
    (flo1.toString()),
    ((100).toString()),
]

test.forEach(result => console.log(result) );