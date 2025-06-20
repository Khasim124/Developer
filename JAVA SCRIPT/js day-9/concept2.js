// DOM Manipulation
// Styling Elements
const title = document.querySelector("#main-heading");
title.style.color = "blue";
title.style.background = "pink";
// title.style.margin='10px';
title.style.textAlign = "center";
console.log(title);

const container = document.querySelector("div");
container.style.border = "solid green";

const listItems = document.querySelectorAll(".list-items");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  console.log("Length: ", listItems.length);
  listItems[i].style.fontSize = "1rem";
  listItems[i].style.color = "red";
  listItems[i].style.background = "yellow";
  listItems[i].style.border = "solid green";
  listItems[i].style.padding = "5px";
  listItems[i].style.margin = "5px";
  listItems[i].style.listStyleType = "none";
}

// Creating Elements

const ul = document.createElement("ul");
console.log(ul);
const li = document.createElement("li");
console.log(li);


// Adding elements
ul.appendChild(li);

// Modifying Text

const firstListItem = document.querySelector(".list-items");
console.log(firstListItem.innerText); // get the visible text
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = "X-Man";

// Modifying Attributes & Classes

li.setAttribute("id", "main-heading");
console.log(li.getAttribute("id"));
li.removeAttribute("id");

console.log(title.getAttribute("id"));
li.classList.add("list-items");
console.log(li.getAttribute("class"));

console.log(li.classList.contains("list-items"));

// Remove elements

li.remove();
console.log(li);
