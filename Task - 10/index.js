const form = document.querySelector('form');
const fruits = document.querySelectorAll('.fruit');
// For adding new fruits
const newFruit = document.querySelector('.fruits');

// Made a function for edit button
function edit(){
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    return editBtn;
}

//Adding edit button to previous fruit list
for (let i = 0; i< fruits.length; i++){
    fruits[i].appendChild(edit());
}

/* Adding fruits in the list */
form.addEventListener('submit', function(event){
    event.preventDefault();
    // Selected the input default
    const fruitToAdd = document.getElementById('fruit-to-add');
    // Creating the li element
    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    
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
    newLi.appendChild(edit());
    // Adding li as the last element of unordered list
    newFruit.appendChild(newLi);
})

newFruit.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        newFruit.removeChild(fruitToDelete);
    };
});


