function myFunction(a) {
    
    const string =a+ ''
    const strings = string.split('')
    return strings.map(digit =>Number(digit) )
}
console.log(myFunction(1991));
console.log(myFunction(0804));
