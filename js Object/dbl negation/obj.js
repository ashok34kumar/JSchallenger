1// function myFunction(a,b) {
//     return !!a[b];
// }
// console.log(myFunction({x:'a',y:null,z:'c'},'y'));
// console.log(myFunction({x:'a',b:'b',z:undefined},'z'));

2//Creating Javascript objects one//
// function myFunction(a) {
//     return {key:a};
// }
// console.log(myFunction('a'));
// console.log(myFunction('z'));
// console.log(myFunction('b'));

3///Creating Javascript objects two///
// function myFunction(a,b) {
//     return {[a]:b};
// }
// console.log(myFunction('a', 'b'));
// console.log(myFunction('z', 'x'));
// console.log(myFunction('b', 'w')); 

4///Creating Javascript objects three///
function myFunction(a, b) {
    return a.reduce((acc, key, index)=>{
        acc[key] = b[index];
        return acc ;
},{});

}
console.log(myFunction(['a','b','c'], [1, 2, 3]));
console.log(myFunction(['w','x','y','z'], [10, 9, 5, 2]));
console.log(myFunction([1, 'b'], ['a', 2]));


