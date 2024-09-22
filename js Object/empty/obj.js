function myFunction(obj) {
    const newObj={...obj};
    for(key in newObj){
        if(newObj[key].trim() ==='' ) newObj[key] = null;

    }
    return newObj;

}
console.log(myFunction({ a: 'a', b: 'b', c: '' }));
console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }));
