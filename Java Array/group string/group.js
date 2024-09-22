function myFunction(arr) {
    
    return arr.reduce((acc,cur)=>{
        const firstLetter = cur.toLowerCase().charAt(0);
        return {
            ...acc,[firstLetter]:[...(acc[firstLetter]||[]),cur
        
        ]
        };
    }, {});
}
console.log(myFunction(['Alf', 'Alice', 'Ben'])); 

console.log(myFunction(['Apple', 'Banana', 'Avocado', 'Blueberry'])); 

console.log(myFunction(['Ant', 'Bear', 'Bird']));
12



