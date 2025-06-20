// function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Data Received')
//         },2000)
//     })
// }
// async function fetchData(){
//     console.log('Fetching Data...')
//     let result=await getData();
//     console.log(result);
// }
// fetchData();

//
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success=false;
//             if(success){
//             resolve('Data Received')
//             }
//             else{
//             reject('Failed to Fetch Data!')
//             }
//         },0)
//     })
// }
// async function fetchData(){
//     try{
//         console.log('Fetch Data...')
//         let result=await getData();
//         console.log(result);
//         }
//     catch(error){
//         console.log('Error:',error);
//     };
// }
// fetchData();

//
// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(" User data fetched");
//         }, 2000);
//     });
// }

// function getOrders() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Orders data fetched");
//         }, 1000);
//     });
// }

// async function fetchDetails() {
//     console.log("Fetching details...");

//     let user = await getUser();
//     console.log(user);

//     let orders = await getOrders();
//     console.log(orders);
// }

// fetchDetails();

//
// async function fetchDetails() {
//     console.log("Fetching details...");

//     let [user, orders] = await Promise.all([getUser(), getOrders()]);

//     console.log(user);
//     console.log(orders);
// }

// fetchDetails();

//
// async function processItems() {
//     let items = ["🍎", "🍌", "🍇"];

//     for (let item of items) {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log("Processed:", item);
//     }
// }

// processItems();

// async function processItems() {
//     let items = ['🥕' ,'🥦',' 🌽',' 🍆',' 🥒',' 🍅',' 🥔' ,'🍠'];

//     let promises = items.map((item) =>
//         new Promise((resolve) => setTimeout(() => {
//             console.log("Processed:", item);
//             resolve();
//         }, 1000))
//     );

//     await Promise.all(promises);
// }

// processItems();

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json())
//     .then(data => console.log("User Data:", data))
//     .catch(error => console.error("Error:", error));

//
// async function fetchUser() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         let data = await response.json();
//         console.log("User Data:", data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchUser();

async function createUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "John Doe",
                email: "john@example.com"
            })
        });

        let data = await response.json();
        console.log("User Created:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

createUser();

