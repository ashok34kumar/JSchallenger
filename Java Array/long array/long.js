function myFunction(arr) {
    return arr.reduce((longest,current)=>current.length>longest.length?current:longest,'')
}
console.log(myFunction(['help', 'me'])); 
console.log(myFunction(['I', 'need', 'candy']));
