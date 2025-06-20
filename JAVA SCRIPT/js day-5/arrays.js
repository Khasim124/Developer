let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

let books = new Array("math", "social", "eng");
console.log(books);

console.log(fruits[0]);
console.log(fruits[2]);

books[1] = "physics";
console.log(books);
console.log(books.length);

books.push("biology");
console.log(books);

books.pop();
console.log(books);

books.unshift("math");
console.log(books);

books.shift();
console.log(books);

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

for (let book of books) {
  console.log(book);
}
books.forEach((book, index) => {
  console.log(`${book}:${index + 1}`);
});

console.log(books.indexOf("history"));
console.log(books.includes("math"));

let num = [10, 20, 30, 40, 50, 60, 70, 80];
let found = num.findIndex((n) => n > 65);
console.log(found);

let colors = ["red", "white", "yellow", "blue"];
colors.splice(2, 0, "black", "green");
console.log(colors);

colors.splice(2, 2, "tomato", "ash");
console.log(colors);

console.log(colors.slice(1, 3));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

let myArr = ["Hello", "world!"];
let myStr = myArr.join("");
console.log(myStr);

let newArr = myStr.split("");
console.log(newArr);

let myArr1 = [10, 20, 30,45,55,65,47,83,99,20,687];
let myOutput = [];
for (let num of myArr1) {
  myOutput.push(num + 5);
}
console.log(myOutput);

let add=myArr1.map(num=>num+5)
console.log(add);


let filterArr=myArr1.filter(num=> num>25)
console.log(filterArr);

let count=0
for(let num of myArr1){
  count=count+num;
}
console.log(count);


let sum=myArr1.reduce((count,num)=>count+num,0)
console.log(sum);


