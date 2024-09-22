function myFunction(arr) {
    return arr.sort()
}
console.log(myFunction(['b', 'c', 'd', 'a']));
console.log(myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

//if you want to sort a number then we can do
function myFunction(arr) {
    return arr.sort((a,b)=>a-b);
}
console.log(myFunction([10, 2, 1, 21]));
console.log(myFunction([5, 100, 50, 1]))
//Sorting in Descending Order
function myFunction(arr) {
    return arr.sort((a,b)=>b-a)
}
console.log(myFunction([10, 2, 1, 21]))
console.log(myFunction([5, 100, 50, 1]));
