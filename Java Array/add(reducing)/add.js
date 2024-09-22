function myFunction(a) {
    return a.reduce((acc , curr)=>acc + curr, 0)
}
console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000,1]));
console.log(myFunction([-50,0,50,200])); 


