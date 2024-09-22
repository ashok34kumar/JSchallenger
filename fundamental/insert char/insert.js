function myFunction(a, b) {
    let result = [];
    let rest = a ; 
    while (rest.length) {
        result.push(rest.slice(-3));
        debugger
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b)
}
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w'));
console.log(myFunction('abcde','$'))


