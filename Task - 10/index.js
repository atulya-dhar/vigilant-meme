const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

// console.log(fruits.length);
for (let i = 0; i< fruits.length; i++){
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    const editBtnName = document.createTextNode('Edit');
    editBtn.appendChild(editBtnName);
    console.log(editBtn);
    fruits.appendChild(editBtn);
    console.log(fruits);
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

    // Creating Edit Button
    // const editBtn = document.createElement('button');
    // editBtn.className = 'edit-btn';
    // const editBtnName = document.createTextNode('Edit');
    // editBtn.appendChild(editBtnName);
    newLi.appendChild(editBtn);
    console.log(newLi);
    // Adding li as the last element of unordered list
    fruits.appendChild(newLi);
})

fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
});
