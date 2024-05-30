// Add input element inside form, before button, to take fruit description
const fruitForm = document.querySelector('form');
const fruitDescription = document.createElement('input');
const fruitToAdd = document.getElementById('fruit-to-add');
const fruitList = document.querySelector('.fruits');
const filterInput = document.getElementById('filter');

// Configure the new input element for the fruit description
fruitDescription.id = 'description';
fruitDescription.type = 'text';
fruitDescription.name = 'description';
fruitDescription.placeholder = 'Enter fruit description';

// Insert the description input before the submit button
fruitForm.insertBefore(fruitDescription, fruitForm.querySelector('button'));

// Add event listener to the form for adding new fruits
fruitForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fruitName = fruitToAdd.value.trim();
  const fruitDesc = fruitDescription.value.trim();

  if (fruitName) {
    const newFruitItem = document.createElement('li');
    newFruitItem.classList.add('fruit');

    const fruitNameSpan = document.createElement('p');
    fruitNameSpan.classList.add('frname');
    fruitNameSpan.textContent = fruitName;

    const fruitDescSpan = document.createElement('p');
    fruitDescSpan.classList.add('frdesc');
    fruitDescSpan.textContent = ` - ${fruitDesc}`;
    fruitDescSpan.style.fontStyle = 'italic';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
      fruitList.removeChild(newFruitItem);
    });

    newFruitItem.appendChild(fruitNameSpan);
    newFruitItem.appendChild(fruitDescSpan);
    newFruitItem.appendChild(deleteButton);

    fruitList.appendChild(newFruitItem);

    // Clear the input fields after adding the fruit
    fruitToAdd.value = '';
    fruitDescription.value = '';
  }
});

// Add event listener for the filter input
filterInput.addEventListener('input', filterItems1);

function filterItems1(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = fruitList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent.toLowerCase();
    var itemDes = item.childNodes[1].innerText.toLowerCase(); // Use childNodes to get the description text
    console.log(item);
    // Check if either the item name or description contains the filter text
    if (itemName.indexOf(text) !== -1 || itemDes.indexOf(text) !== -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}