function myFunction(obj) {
   return obj.a?.b;
}
console.log(myFunction({a:1})); 
console.log(myFunction({a:{b:{c:3}}}));
console.log(myFunction({b:{a:1}})); 
console.log(myFunction({a:{b:2}})); 







