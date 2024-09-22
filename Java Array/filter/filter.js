function myFunction(a,b) {
    return a.filter(element=>element !== b);
}
console.log(myFunction([1,2,3], 2));
console.log(myFunction([1,2,'2'], '2'));




