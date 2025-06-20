window.addEventListener(
	'click',
	function (e) {
		console.log('Window');
	},
	false
);

document.addEventListener(
	'click',
	function (e) {
		console.log('Document');
	},
	false
);

document.querySelector('.div2').addEventListener(
	'click',
	function (e) {
         
		console.log('Div 2');
	},
	{once: true}
);

document.querySelector('.div1').addEventListener(
	'click',
	function (e) {
		console.log('Div 1');
	},
	false
);

document.querySelector('.button').addEventListener(
	'click',
	function (e) {
        e.preventDefault();
		console.log(e.target.innerText = 'clicked');
	},
	false
);
