const bodyEle = document.querySelector("body");
const randomClickFunction = function() {
 const colors = ['red','green', 'blue','tomato','skyblue'];
 const randomIndex = Math.floor(Math.random() * colors.length);
 const randomColor = colors[randomIndex];
 bodyEle.style.backgroundColor = randomColor;
 console.log(randomColor);
}
bodyEle.onclick = randomClickFunction();