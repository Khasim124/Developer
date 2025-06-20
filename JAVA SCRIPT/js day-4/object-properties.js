let person={
name: "Mahesh",
age:30,
isDeveloper:true,
greet: function(){
    console.log("Hello"  + this.name) ;
}
};

let car = {
    brand:"Tesla",
    model:"Model5",
    year:2024
};


let book = new Object();
book.title="javascript basics";
book.author="john abhraham";
book.pages=300;

// function car(brand,year){
//     this.brand=brand;
//     this.year=year;
// }
// let car1=new car("mahendra",2023);
// let car2=new car("tata",2022)

// console.log(car1);
// console.log(car2);

let studentPrototype = {
    greet: function() {
        console.log("Hello, I am a student!");
    }
};

let student = Object.create(studentPrototype);
student.name = "Alex";
student.age = 22;

// console.log(person.age);
// console.log(car.brand);

// console.log(person["name"]);
// console.log(car["model"])
// key="name"
// console.log(person[key])

person.age = 35;  
person.city = "Hyderabad";  
console.log(person);



delete person.city;
console.log(person);



console.log("age" in person);  
console.log("salary" in person); 

person.greet();


for (let key in person) {
    console.log(`${key}=${person[key]}`);
}
console.log(Object.keys(person));   
console.log(Object.values(person));
console.log(Object.entries(person)); 



let employee = {
    name: "Mahesh",
    address: {
        city: "Hyderabad",
        country: "India"
    }
};

console.log(employee.address.country); 


let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };

console.log(obj2); 



let obj3 = { x: 10, y: 20 };
let mergedObj = { ...obj1, ...obj3 };
console.log(mergedObj); 

let product = { name: "Laptop", price: 50000 };
let { name, price } = product;

console.log(name);  
console.log(price); 


let user2 = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

user2.greet(); 


let obj = { name: "Mahesh" };
Object.freeze(obj);
obj.name = "John";  
obj.age = 30;      
console.log(obj);   

let obj5 = { name: "John" };
Object.seal(obj5);
obj5.name = "Alex"; 
delete obj5.name;   
console.log(obj5);  

let objA = { a: 1, b: 2 };
let objB = Object.assign({},objA);
console.log(objB); 



let entries = [["name", "Alice"], ["age", 25]];
let objC = Object.fromEntries(entries);
console.log(objC); 


