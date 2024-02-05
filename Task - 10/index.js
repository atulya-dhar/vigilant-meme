const form = document.querySelector('form');
const fruits = document.querySelectorAll('.fruit');
// For adding new fruits
const newFruit = document.querySelector('.fruits');

for (let i = 0; i< fruits.length; i++){
    // const editFruitbtn = `<button class='edit-btn'>Edit</button>`;

    //Adding edit button to previous fruit list
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    const editBtnName = document.createTextNode('Edit');
    editBtn.appendChild(editBtnName);
    fruits[i].appendChild(editBtn);
}

/* Adding fruits in the list */
form.addEventListener('submit', function(event){
    event.preventDefault();
    // Selected the input default
    const fruitToAdd = document.getElementById('fruit-to-add');
    // Creating the li element
    const newLi = document.createElement('li');
    
    // Adding the fruit name to the li element
    const liText = document.createTextNode(fruitToAdd.value);
    newLi.appendChild(liText);

    // Creating Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    const deleteBtnName = document.createTextNode('X');
    deleteBtn.appendChild(deleteBtnName);
    newLi.appendChild(deleteBtn);

    // Adding Edit Button to new fruit
    const newFruitedit = document.createElement('button');
    newFruitedit.className = 'edit-btn';
    const newFruitname = document.createTextNode('Edit')
    newFruitedit.appendChild(newFruitname);
    newLi.appendChild(newFruitedit);
    // Adding li as the last element of unordered list
    newFruit.appendChild(newLi);
})

newFruit.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        newFruit.removeChild(fruitToDelete);
    };
});
