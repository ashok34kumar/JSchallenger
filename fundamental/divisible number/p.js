// function myFunction(x,y) {
//     if (x % y === 0) {
//         return x;
//     }else{
//         return x +(y-(x % y))
//     }
// }

function myFunction(x ,y) {
    while (x%y !== 0) x++
    return x
}
console.log(myFunction(10,3));
console.log(myFunction(15,9));
console.log(myFunction(7,4));