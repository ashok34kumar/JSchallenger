function myFunction(a) {
    return a.filter(num=>num<0).length

}
console.log(myFunction([1,-2,2,-4]));
console.log(myFunction([4,-3,2,1,0]));
console.log(myFunction([0,9,1]));