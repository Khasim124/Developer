// let myStr = "i love java";
// let myArr = myStr.split(" ");
// for (let i = 0; i < myArr.length; i++) {
//   myArr[i] = myArr[i].charAt(0).toUpperCase();
// }
// console.log(myArr)



// let original="madam"
// let reverseout="";
// for(i=original.length-1;i>=0;i--){
// reverseout+=original[i]
// console.out(reverseout)
// }
// console.log(original===reverseout)

// console.log(Math.round(123.50))
// console.log(Math.ceil(123.05))
// console.log(Math.floor(123.51))
// console.log(Math.floor(Math.random()*100))
// console.log(Math.min(100,20,200,300,))
// console.log(Math.max(123,50))
// console.log(Math.pow(2,5))
// console.log(Math.sqrt(2,3))

// console.log(Boolean(0))
// console.log("please login")
// let i;
// console.log(i)

// let person = { name: "Alice" };
// console.log(person?.age);


let person={
  firstname:"khasim",
  age:22,
  skill:"java",
  greet:function(){
  console.log("Hello "+this.firstname);
  }
}
person.greet()
console.log(person)
