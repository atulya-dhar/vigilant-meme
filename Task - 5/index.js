let listItems = document.getElementsByTagName('li');

listItems[4].style.color = 'blue';

for(let i=0;i<=listItems.length-1; i++) {
    listItems[i].style.fontStyle = 'italic'
}