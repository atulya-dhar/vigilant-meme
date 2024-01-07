const fruitManipulator = document.getElementsByClassName('fruit');
fruitManipulator[2].style.backgroundColor = 'yellow';

for(let i=0; i<=fruitManipulator.length-1; i++){
    fruitManipulator[i].style.fontWeight = 'bold';
}