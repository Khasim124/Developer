function sayHello(){
    console.log("Hello Mahesh");
}
sayHello();

console.log(myName);
var myName='mahesh';
console.log(myName);


const myFunction=function(){
    console.log("hi i am anonomous function")
}
myFunction();

const myFunc =()=>console.log('i love java Script')
myFunc();


const myFunc1 =()=>{
    console.log('i love')
    console.log('js')

}
myFunc1();

function greet(userName='guest'){
    if(userName ==='guest'){
        return `This is guest account`
    }
    console.log(`Hello ${userName} welcome`)
}
greet("Mahesh");

// const greet=(userName="guest")=>{
//     console.log(`Hello ${userName} welcome`)
// }
// greet();

