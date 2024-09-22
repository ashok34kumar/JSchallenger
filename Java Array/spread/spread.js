// function myFunction(...arrays) {
    
//     return[].concat(...arrays)
// }
// console.log(myFunction([1, 2, 3], [4, 5, 6])); 
// console.log(myFunction(['a', 'b', 'c'], [4, 5, 6])); 
// console.log(myFunction([true, true], [1, 2], ['a', 'b']));

//by flat() method
function my2Function(...arrays) {
    
    return arrays.flat()
}
console.log(my2Function([1, 2, 3], [4, 5, 6])); 
console.log(my2Function(['a', 'b', 'c'], [4, 5, 6])); 
console.log(my2Function([true, true], [1, 2], ['a', 'b']));



