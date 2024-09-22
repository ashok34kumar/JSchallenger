function myFunction (str){

const arr = [...str];// it's not allowed to declare a variable with the same name as a function parameter//
const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt(0)+1));
return correctedArray.join('');
}

console.log(myFunction('bnchmf'));
console.log(myFunction('bgddrd'));
console.log(myFunction('sdrshmf'));
console.log(myFunction('kumar'));
