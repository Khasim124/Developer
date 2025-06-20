// DOM Manipulation

// Traverse The DOM

// Parent Node Traversal

/*
let ul = document.querySelector('ul');
console.log(ul.parentNode.parentNode)
console.log(ul.parentElement.parentElement)

const html = document.documentElement;
console.log(html.parentNode)
console.log(html.parentElement)*/


// Child Node Traversal
/*
let ul  = document.querySelector('ul');
console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)

ul.childNodes[1].style.backgroundColor = 'blue'

console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)-
*/

// Sibling Node Traversal

let ul = document.querySelector('ul');
const div = document.createElement('div');
console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextSibling);
// console.log(ul.nextElementSibling);