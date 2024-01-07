// Create element && styling
const head = document.createElement('h3');
const para = document.createElement('p');
head.style.fontStyle = 'italic';


// Create TextNode
const headText = document.createTextNode('Buy high quality organic fruits online')
const paraText = document.createTextNode('Total fruits:4')

// appendChild 
head.appendChild(headText);
para.appendChild(paraText);

const mainDiv = document.getElementsByTagName('div');
mainDiv[0].appendChild(head);

// insertBefore 
const classHolder = document.querySelector('.fruits');
mainDiv[1].insertBefore(para, classHolder);

// setAttribute, className, id
para.id = 'fruits-total';