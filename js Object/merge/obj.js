function myFunction(x,y) {
    const {b:d,...rest} = y;
    return {...x , ...rest,d};
}

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));

console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));








