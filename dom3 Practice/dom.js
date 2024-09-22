const input = document.getElementById('input');
input.addEventListener('input', () => {
  // type in your code here
const listItems = document.querySelectorAll('#list li')

listItems.forEach(li =>{
if(li.innerText.includes(input.value))return li.hidden = false;
return li.hidden = true;
})
});


/* alternative code
const input = document.getElementById('input');
const listItems = document.querySelectorAll('#list li');

input.addEventListener('input', () => {
  const filter = input.value.toLowerCase(); // Get the search term and convert to lowercase
  
  listItems.forEach(item => {
    const text = item.textContent.toLowerCase(); // Get the list item text and convert to lowercase
    
    if (text.includes(filter)) {
      item.style.display = ''; // Show the list item if it matches the search term
    } else {
      item.style.display = 'none'; // Hide the list item if it doesn't match
    }
  });
}); */
