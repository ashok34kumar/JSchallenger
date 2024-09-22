function myFunction(obj) {
    return {
        fn:obj.fn,
        ln:obj.ln,
        ...(obj.size && {size: `${obj.size}cm`}),
        ...(obj.weight && {weight:`${obj.size}kg`})


    };

    }
console.log(myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));

console.log(myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));

console.log(myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));

console.log(myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));
