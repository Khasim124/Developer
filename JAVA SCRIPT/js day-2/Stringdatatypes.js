// let str1 = "Hello, World!";  // Double quotes
// let str2 = 'JavaScript is awesome'; // Single quotes
// let str3 = `Hello, ${str2}`; // Template literal (backticks)
// console.log(str3); // Hello, JavaScript is awesome

// let text = "JavaScript";
// 	console.log(text.length); // 10

// console.log(text[0]); // "J"
// console.log(text.charAt(5)); // "v"

// let text = "Hello";
// console.log(text.charAt(1)); // "e"
// console.log(text.charCodeAt(1)); // 101 (ASCII code of 'e')

// let message = "Hello JavaScript";
// 		console.log(message.toUpperCase()); // "HELLO JAVASCRIPT"
// 		console.log(message.toLowerCase()); // "hello javascript"

// let phrase = "I love JavaScript!";
// 	console.log(phrase.indexOf("love")); // 2 (First occurrence)
// 	console.log(phrase.lastIndexOf("a")); // 10 (Last occurrence)
// 	console.log(phrase.includes("Java")); // true

// let text = "Hello, world! Hello again.";
// console.log(text.indexOf("Hello")); // 0 (first occurrence)
// console.log(text.lastIndexOf("Hello")); // 14 (last occurrence)

// let str = "JavaScript";
// 	console.log(str.slice(0, 4)); // "Java"
// 	console.log(str.substring(0, 4)); // "Java"
// 	console.log(str.substr(4, 6)); // "Script"

    // let text = "JavaScript";

	// // Using `slice()`
	// console.log(text.slice(0, 4)); // "Java"
	// console.log(text.slice(-6)); // "Script" (negative index works)

	// // Using `substring()`
	// console.log(text.substring(0, 4)); // "Java"
	// console.log(text.substring(-6)); // "JavaScript" (negative values become 0)

	// // Using `substr()`
	// console.log(text.substr(4, 6)); // "Script"
	// console.log(text.substr(-6, 6)); // "Script" (negative index works)

    // let sentence = "JavaScript is easy";
	// console.log(sentence.replace("easy", "powerful")); // "JavaScript is powerful"
	// console.log(sentence.replace(/javascript/i, "Python")); // Case-insensitive
    // console.log(sentence.replace("easy","Stronger"));

// let sentence = "I love JavaScript. JavaScript is powerful.";

// console.log(sentence.replace("JavaScript", "Python"));
// // "I love Python. JavaScript is powerful." (Only first occurrence replaced)

// console.log(sentence.replaceAll("JavaScript", "Python"));
// // "I love Python. Python is powerful." (All occurrences replaced)

// let words = "apple, banana, cherry";
// 	console.log(words.split(", ")); 

// let first = "Hello";
// 	let second = "World";
// 	console.log(first + " " + second); // "Hello World"
	
//Using concat() Method

	// console.log(first.concat(" ", second)); // "Hello World"

//  let name = "Mahesh";
// console.log(`Hello, ${name}!`); // "Hello, Mahesh!

 const email = 'peddakhasimshaik162@gmail.com';
 domain_name = email.slice(email.lastIndexOf('@') + 1);
 console.log('Domain name: ', domain_name);
console.log(email)

//const email ='peddakhasimshaik162@gmail.com';
//console.log(email.slice(0,));