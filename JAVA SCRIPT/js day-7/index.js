function toTitleCase(name) {
  let a = name.split(" ");
  let word = "";
  for (let b of a) {
    let words = b.charAt(0).toUpperCase() + b.slice(1);
    word += words + " ";
  }
  console.log(word);
}
toTitleCase("naga mahesh edefdde rgerg tgth");

// function toTitleCase(name){
//   let a=name.split(" ")
//   let final=""
//   for (let b of a){
//     let word=b.charAt(0).toUpperCase()+b.slice(1)
//     final+=word+" "
//   }
//   console.log(final)
// }
// toTitleCase("naga mahesh gatta")

// function toTitleCase(name){
//     let arr=name.split(" ")
//     let final=""
//     for(let a of arr){
//         let word=a.charAt(0).toUpperCase()+a.slice(1)
//         final+=word +" "
//     }
//     console.log(final)
// }
// toTitleCase("naga mahesh ");

// const toTitleCase=(name)=>{
// let myArr=name.split(" ")
// let outputString=[]
// for (let a of myArr){
//     outputString.push(a.charAt(0).toUpperCase()+a.slice(1));
// }
// return  outputString.join(" ");
// }
// console.log(toTitleCase("naga mahesh ghhaDGY jsahbu hbsh bhsg"))


const email = "nagamaheshgatta@gmail.com";
console.log(email.slice(0, email.indexOf("@")));

const num = "123456789";
console.log("xxxx xxxx", num.slice(-4));

const bodyEle = document.querySelector("body");
const randomClickFunction = function () {
  const colors = ["red", "green", "blue", "tomato", "skyblue"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  bodyEle.style.backgroundColor = randomColor;
  console.log(randomColor);
};
bodyEle.onclick = randomClickFunction;

let num2 = "5px";
let num1 = 2;
console.log(parseInt(num2) + num1);
console.log(parseInt(num2));

let age = 19;
if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}

console.log(typeof 42);
console.log(typeof "Hello");
console.log([1, 2, 3] instanceof Object);

let str1 = `Hello, World!`; // Double quotes
let str2 = `JavaScript is awesome`; // Single quotes
let str3 = `Hello, ${str2}`; // Template literal (backticks)
console.log(str1);

let phrase = "I love JavaScript!";
console.log(phrase.indexOf("a")); // 2 (First occurrence)
console.log(phrase.lastIndexOf("a")); // 10 (Last occurrence)
console.log(phrase.includes("python"));

// let str = "JavaScript";
// 	console.log(str.slice(0, 4)); // "Java"
// 	console.log(str.substring(0, 4)); // "Java"
// 	console.log(str.substr(4, 6));

let text = "JavaScript";

// Using `slice()`
console.log(text.slice(4, 6)); // "Java"
console.log(text.slice(-6)); // "Script" (negative index works)

// Using `substring()`
console.log(text.substring(4, 6)); // "Java"
console.log(text.substring(-6)); // "JavaScript" (negative values become 0)

// Using `substr()`
console.log(text.substr(4, 6)); // "Script"
console.log(text.substr(-6, 6)); // "Script" (negative index works)

let words = "apple, banana, cherry";
console.log(words.split(", ")); // ["apple", "banana", "cherry"]

// let first = "Hello";
// let second = "World";
// console.log(`${first} ${second}`);

let first = "Hello";
let second = "World";
console.log(first + " " + second);

console.log("Hello\nWorld"); // New line
console.log("Hello\tWorld");

console.log("hello" * 2);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(100, 200));

let myVar;
if (myVar) {
  console.log("Value exists!");
} else {
  console.log("No value!");
}

function sayHello() {
  console.log("Hello!");
}

let result = sayHello();
result;

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Mahesh", 30);
let person2 = new Person("John", 25);
console.log(person1);

let book = new Object();
book.title = "JavaScript Basics";
book.author = "John Doe";
book.pages = 300;
console.log(book);

let studentPrototype = {
  greet: function () {
    console.log("Hello, I am a student!");
  },
};

let student = Object.create(studentPrototype);
student.name = "Alex";
student.age = 22;

let obj = [
  {
    username: "khasim",
    password: 123,
  },
  {
    username: "khagsim",
    password: 1234,
  },
  {
    username: "khassim",
    password: 12345,
  },
];
function newFunction(username, password) {
  for (let b of obj)
    if (username == b.username && password == b.password) {
      console.log("login");
    } else {
      console.log("login failed");
    }
}
newFunction("khasim", 123);
