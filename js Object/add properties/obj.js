// function myFunction(a) {
    
//     return a.map(obj=>{
//     return {...obj,continent:a};
    
//     });
// }
function myFunction(a) {
    return a.reduce((acc, cur)=>{
        return {...acc,[cur]:(acc[cur]||0)+1}
    }, {});
}

console.log(myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));




