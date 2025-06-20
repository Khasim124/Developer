let heading = document.getElementById("main-heading");
console.log(heading.innerText);

let paragraphs = document.getElementsByClassName("list-items");
console.log(paragraphs[4].innerText);

let allParagraphs = document.getElementsByTagName("li");
console.log(allParagraphs.length);

let firstPara = document.querySelector(".list-items");
console.log(firstPara.length)
let allParas = document.querySelectorAll("li");
console.log(allParas.length);

let parent = document.getElementById("main-heading").parentNode;
console.log(parent.tagName);

let button = document.querySelector("button");
let clonedButton = button.cloneNode(true);
document.body.appendChild(clonedButton);


