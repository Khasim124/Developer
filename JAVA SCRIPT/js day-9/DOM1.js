// DOM Manipulation

// GetElementById
const title = document.getElementById('main-heading');
title.style.color = 'blue';
console.log(title);

// GetElementByClassName()
const listItem = document.getElementsByClassName('listItems');
listItem[0].style.color='pink'
console.log(listItem);

// GetElementByTagName()
const li = document.getElementsByTagName('li');
console.log(li);
for(i=0;i<li.length;i++){
li[i].style.color='green';
}
// querySelector
// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll()

const containers = document.querySelectorAll('div');
console.log(containers)


