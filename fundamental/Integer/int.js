function myFunction(a) {
    return a - Math.floor(a) === 0;
}
console.log(myFunction(1.123))
console.log(myFunction(10))
