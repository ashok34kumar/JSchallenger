function myFunction(arr) {
  return arr.every((element) => element === arr[0]);
}
console.log(myFunction([true, true, true, true]));
console.log(myFunction([1,1,1,2]));



