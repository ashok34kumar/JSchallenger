function myFunction(min , max) {
    
    let result = [];
    for (let i = min; i < max; i++) {
        result.push(i)
        
    }
    return result
}
console.log(myFunction(2, 10));
console.log(myFunction(-5, 5));
console.log(myFunction(2, 7));


