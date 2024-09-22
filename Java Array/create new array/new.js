function myFunction(arr, num) {
 
    const firstElement = num >= 6 ? num : 0 ;
    return [firstElement,...arr];
}
console.log(myFunction([1, 2, 3], 6)); 
console.log(myFunction(['a', 'b'], 2)); 
console.log(myFunction([null, false], 11));


