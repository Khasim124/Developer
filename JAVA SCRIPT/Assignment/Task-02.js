//Use a for...in loop to print all keys and values of the person object.

let person={
    firstname:"Khasim",
    age:22,
    isStudent:true
}
for (let key in person) {
    console.log(`${key}=${person[key]}`);
}

//Add a method greet to the person object that prints "Hello, my name is [name]".

 person.greet=function(){
    console.log("Hello, my name is "+this.firstname)
}
person.greet()

//Create a shallow copy of the person object using the spread operator {...}.
let obj={...person}
console.log(obj)

//Create an object student with properties: name, marks (which is another object with math, science, english scores). Print the math score.

let student={
    name:"khasim",
    marks:{
        math:20,
        science:25,
        english:25
    }
}
console.log(student.marks.math);

//Merge two objects { a: 10, b: 20 } and { b: 30, c: 40 }. Print the result.  Object Freeze:
//Use Object.freeze() on an object and try modifying its properties.

let obj1={a:10,b:20}
let obj2={b:30,c:40}
let Mergeobj3={...obj1,...obj2}
console.log(Mergeobj3);
Object.freeze(obj1);
obj1.a=20; //no effect
obj1.b=30; //no effect
console.log(obj1);

//Use destructuring to extract name and age from the person object.

let {firstname,age}=person;
console.log(firstname);
console.log(age);

//Convert { a: 10, b: 20, c: 30 } into an array of key-value pairs.

let obj122={a:10,b:20,c:30}
let  array=  Object.entries(obj122)
console.log(array);

//Given { apple: 50, banana: 30, orange: 40 }, find the key with the highest value.


let obj3 = {
    apple: 50,
    banana: 30,
    orange: 40,
    pinapple: 60
};
let greater=0
for(let key in obj3){

    if(greater < obj3[key]){
        greater = obj3[key]
    }
}
 
console.log(greater)

//
let marks = [40, 50, 60, 70, 80, 90]

let total = marks.map(score=>score+5).filter(score=>score > 45).reduce((acc,score)=>acc+score, 0);
console.log(total);
