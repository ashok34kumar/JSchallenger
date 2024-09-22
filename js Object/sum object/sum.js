function myFunction(a) {
   return Object.values(a).reduce((a,b)=>a+b, 0)
}

console.log(myFunction({a:1,b:2,c:3}));
console.log(myFunction({w:15,x:22,y:13}));



