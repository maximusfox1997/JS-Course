"use strict";

const someCondition = true;

if (someCondition) {
    console.log('Its True');
} else if (someCondition === 1) {
    console.log('Another True');
} else {
    console.log('False');
}

const number = (typeof(someCondition) === 'boolean') ? 1 : 0;
console.log(number);

switch(number){
    case 0:
        console.log(false);
        break;
    case 1:
        console.log(true);
        break;
    default:
        console.log('Anything');
        break;
}   