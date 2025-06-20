//Create an array called products that contains five objects.
// Each object should have the following properties:
// id (a unique number)
// name (a string)
// price (a number)
// category (a string)
// stock (a number)

let products=[
    {
        id:1,
        name:"vivo",
        price:25000,
        category:"smartphone",
        stock:11
    },
    {
        id:2,
        name:"samsung",
        price:20000,
        category:"smart",
        stock:22
    },
    {
        id:3,
        name:"oppo",
        price:28000,
        category:"smartphone",
        stock:33
    },
    {
        id:4,
        name:"realme",
        price:22000,
        category:"smartphone",
        stock:44
    },
    {
        id:5,
        name:"samsung",
        price:18000,
        category:"smartphone",
        stock:55
    },
]


//Task 2: Modify Product Data
// Increase the price of the third product by 20%.
// Reduce the stock of the first product by 5 units.
// Change the category of the last product to "Electronics".
products[2].price = products[2].price * 1.2;
products[0].stock = products[0].stock - 5;
products[4].category = 'electronic';
console.log(products);


//Accessing and Displaying Data
// Print the name of the most expensive product in products.
// Print the category of the second product.
// Print the stock of the product with ID = 3.
let highest=0
let highestValueProductName = '';
for(let product of products){
    if(product.price>highest){
        highest = product.price;
        highestValueProductName = product.name
    }
}
    
console.log(`${highestValueProductName} : ${highest}`);



console.log(products[1].category);


let stock=products.filter(x=>x.id===3)
console.log(stock[0].stock)


//Task 4: Create an Employee Database
// Create an array called employees with four employee objects.
// Each employee object should have:
// empId (a unique number)
// name (a string)
// designation (a string)
// salary (a number)
// department (a string)

let employee=[
    {
        empid:1,
        name:"sadhik",
        designation:"MCA",
        salary:500000,
        department:"developer"
    },
    {
        empid:2,
        name:"Narasimhanaidu",
        designation:"Btech",
        salary:7500000,
        department:"C.E.O"
    },
    {
        empid:3,
        name:"Khasim",
        designation:"MCA",
        salary:1800000,
        department:"GM"
    },
    {
        empid:4,
        name:"pavan",
        designation:"MCA",
        salary:1200000,
        department:"S.E"
    }
]


// Task 5: Update Employee Details
// Increase the salary of the first employee by 10%.
// Change the designation of the third employee to "Senior Developer".
// Assign "HR" as the department of the second employee.
employee[0].salary=employee[0].salary * 1.1;
employee[2].designation="Senior developer";
employee[1].department="HR";
console.log(employee);

// Task 6: Retrieve Employee Data
// Print the name of the highest-paid employee.
// Print the designation of the employee with empId = 2.
// Print the department of the last employee.

let highestValue=0
let empName=""
for(let object of employee) {
    if(object.salary>highestValue){
        highestValue=object.salary;
        empName=object.name
    }
}
console.log(empName);


let designation=employee.filter(y=>y.empid===2)
console.log(designation[0].designation)

console.log(employee[3].department);