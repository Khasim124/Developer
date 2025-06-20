// Event Delegation
// It allows users to append a single event listener to parent element that adds it to all of its parent and future descendants that match a selector.
/*
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#football').addEventListener('click', function (e) {
		console.log('Football is clicked');
		e.target.style.backgroundColor = 'lightgrey';
	});
});

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#basketball').addEventListener('click', function (e) {
		console.log('Basketball is clicked');
		e.target.style.backgroundColor = 'lightgrey';
	});
});

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#boxing').addEventListener('click', function (e) {
		console.log('boxing is clicked');
		e.target.style.backgroundColor = 'lightgrey';
	});
});

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#cricket').addEventListener('click', function (e) {
		console.log('Cricket is clicked');
		e.target.style.backgroundColor = 'lightgrey';
	});
});

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#hockey').addEventListener('click', function (e) {
		console.log('Hockey is clicked');
		e.target.style.backgroundColor = 'lightgrey';
	});
});
*/

document.querySelector('#sports').addEventListener('click', function (e) {
	console.log(e.target.getAttribute('id') + ' is clicked');
	const target = e.target;

	if (target.matches('li')) {
		target.style.backgroundColor = target.style.backgroundColor === 'lightgrey' ? '' : 'lightgrey';
	}
});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');
newSport.innerText = 'tennis';
newSport.setAttribute('id', 'tennis');

newSport.classList.add('list-items');
sports.appendChild(newSport);
