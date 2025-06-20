// DOM Manipulation
// Event Listeners

// syntax = element.addEventListener('event name', function);

const buttonTwo = document.querySelector('.btn-2');

const getAlert = () => {
    alert('Button 2 clicked');
}

buttonTwo.addEventListener('click', getAlert)
/*
function alertBtn2(){
    alert('I also love Javascript')
}
buttonTwo.addEventListener('click', alertBtn2);
*/
/*
buttonTwo.addEventListener('click', function (event) {
    console.log('Button 2 clicked');
});
*/

// Mouse Over

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
	newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);
