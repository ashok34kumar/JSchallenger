function myFunction(a,b) {
    const func = x =>x.replace('%','')
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    return first.charAt(0).toUpperCase()+first.slice(1)+second
}
console.log(myFunction('java', 'tpi%rcs'));
console.log(myFunction('c%ountry', 'edis'));