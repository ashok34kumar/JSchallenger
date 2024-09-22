const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
let currentValue = parseInt(button.innerText , 10)
currentValue += 1
button.innerText = currentValue
});
