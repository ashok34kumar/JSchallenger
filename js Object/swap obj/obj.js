function myFunction(obj) {
    
    return Object.entries(obj).reduce((acc,[key , value])=>{
        acc[value] = key;
        return acc;
    },{});
}

console.log(myFunction({z:'a', y:'b', x:'c', w:'d'}));

console.log(myFunction({2:'a', 4:'b', 6:'c', 8:'d'}));

console.log(myFunction({a:1, z:24}));



