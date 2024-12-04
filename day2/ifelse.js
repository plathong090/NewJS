const status = 200;

if (status === 200) {
    console.log('OK!');
} else if (status === 400) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

//if ternary
const state = 300;
const message = (state === 300) ? 'OK!' : 'Error!';
console.log(message);

//implicitfalse
const name='';
if (name) {
    console.log("We have a name!");
} else {
    console.log("no name provided");
}

//case-sensitive
const sstatus = 'error';
if (sstatus.toUpperCase() === "ERROR") {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!')
}

//using or with if else
const a = 500;
if (a===200) {
    console.log('OK');
} else if (a === 400 || a === 500) {
    console.log('Error');
} else {
    console.log('Unknown a');
}

//switch
const b = 700;
switch (b) {
    case 200:
        console.log('OK');
        break;
    case 400:
        //break;
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown b');
}