function myFunction(a,n) {
    let result = [];
    for(let i = n-1; i<a.length; i +=n){
     result.push(a[i]);
    }
    return result ;
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(myFunction([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); 
console.log(myFunction([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); 



