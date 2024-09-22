function myFunction(a,b) {
    return a
    .filter(element =>element,b)
    .reduce((acc,curr)=>acc+curr , 0);
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); 
console.log(myFunction([-10, -11, -3, 1, -4], -3));  
console.log(myFunction([78, 99, 100, 101, 401], 99));  




