function myFunction(a, b) {
 
   return b in a;

}
console.log(myFunction({a:1,b:2,c:3},'b'));  
console.log(myFunction({x:'a',y:'b',z:undefined},'z')); 
console.log(myFunction({x:'a',y:'b',z:'c'},'a'));   





