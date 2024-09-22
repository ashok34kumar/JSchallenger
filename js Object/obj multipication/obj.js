function myFunction (a ,b) {
    const result = {};

for (let key in a) {
    result[key] = a[key]*b;
        
    }
    return result
}
console.log(myFunction({a:1,b:2,c:3},3));

console.log(myFunction({j:9,i:2,x:3,z:4},10));

console.log(myFunction({w:15,x:22,y:13},6));




