// //Synchronous
// function prepareFood(callback) {
//     console.log('cooking food...')
//     callback();
// }
// function serveFood() {
//     console.log('food is served!')
// }
// prepareFood(serveFood);
// console.log('Custmor Eats Food');

// //Asynchronous
// function orderFood(callback) {
//     console.log('Ordering Food')
//     setTimeout(() => {
//         console.log('Food is Ready!')
//         callback();
//     }, 1000)
// }
// function eatFood() {
//     console.log('Eating Food');
// }
// orderFood(eatFood);
// console.log("watching TV")

// //why callbacks
// console.log('Start')
// setTimeout(function(){
//     console.log('Executed after 2 seconds')
// },1000)
// console.log('End')

// //Fetching
// function fetchUserData(callback){
//  console.log('Fetching User Data...');
//  setTimeout(()=>{
//     let user={name:'khasim',Age:22}
//     callback(user)
//  },1000)
// }
// function displayUser(user){
// console.log('User Data:',user)
// }
// fetchUserData(displayUser);

//callback hell
// function downloadFile(url, callback) {
//     setTimeout(() => {
//         console.log("File downloaded from:", url);
//         callback("fileData");
//     }, 2000);
// }
// function processFile(data, callback) {
//     setTimeout(() => {
//         console.log("Processing file:", data);
//         callback("processedData");
//     }, 2000);
// }

// function saveFile(data, callback) {
//     setTimeout(() => {
//         console.log("File saved as:", data);
//         callback("savedFile");
//     }, 2000);
// }

// function uploadFile(file, callback) {
//     setTimeout(() => {
//         console.log("File uploaded:", file);
//         callback("uploadComplete");
//     }, 2000);
// }

// downloadFile("http://example.com/file", (fileData) => {
//     processFile(fileData, (processedData) => {
//         saveFile(processedData, (savedFile) => {
//             uploadFile(savedFile, (uploadComplete) => {
//                 console.log(" All operations completed!");
//             });
//         });
//     });
// });

//
// let user={username:'mahesh',age:'25'}
// function getUserInfo(){
//     setTimeout(()=>{
//         console.log('UserData:',user);
//     },2000)
// }
// getUserInfo(user)

//
// let myPromise=new Promise((resolve, reject) => {
//     let success=true;
//     setTimeout(()=>{
//         if(success){
//             resolve('ordered delivered!');
//         }else{
//             reject('order cancelled!')
//         }
//     },2000);
// });

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     setTimeout(() => {
//         if (success) {
//             resolve("Order delivered!");
//         } else {
//             reject("Order canceled!"); // Rejected
//         }
//     }, 2000);
// });
// myPromise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//
// function downloadFile(url) {

//     return new Promise((resolve, reject) => {
//         console.log(" Downloading file from:", url);

//         setTimeout(() => {
//             let success = true;
//             if (success) {
//                 resolve("File downloaded successfully!");
//             } else {
//                 reject(" Download failed!");
//             }
//         }, 3000);
//     });
// }


// downloadFile("http://example.com/file")
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

//
function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Water is boiled");
            resolve();
        }, 2000);
    });
}

function addTeaLeaves() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Tea leaves added");
            resolve();
        }, 1000);
    });
}

function addSugar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Sugar added");
            resolve();
        }, 500);
    });
}

function serveTea() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tea is ready!");
            resolve();
        }, 500);
    });
}

boilWater()
    .then(addTeaLeaves)
    .then(addSugar)
    .then(serveTea)
    .then(() => console.log("Tea-making process completed!"));

/*
boilWater()
    .then(addTeaLeaves)
    .then(() => {
        throw new Error("Gas cylinder empty!");
    })
    .then(addSugar)
    .then(serveTea)
    .catch((error) => console.log("Error:", error.message));
*/
