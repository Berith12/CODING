// let person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     subjects: {
//         math: 90,
//         science: 85,
//         history: 88
//     }

// };
// person.country = "USA";
// for(let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }
// for(let key2 in person.subjects) {
//     console.log(`${key2}: ${person.subjects[key2]}`);
// }
// let q = {
//     name: "Ujwal",
//     age: 20,
//     class: "BIT",
//     marks: {
//         math: 95,
//         science: 90,
//         english: 85
//     }
// }
// for (let key in q.marks) {
//     console.log(`${key}: ${q.marks[key]}`);
// }
// let totalMarks = 0;
// let subjectCount = 0;
// for (let key in q.marks) {
//     totalMarks += q.marks[key];
//     subjectCount++;
// }
// console.log(`Total Marks: ${totalMarks}`);                  
// averageMarks = totalMarks / subjectCount;
// console.log(`Average Marks: ${averageMarks}`);
// if (averageMarks >= 40){
//     console.log("Passed");
// } else {
//     console.log("Failed");
// }                                       

// Q2
// let students = {
//     student1: {
//         name: "JK",
//         class: "10A",
//         marks: {
//             math: 45,
//             english: 38,
//             science: 50
//         }
//     },
//     student2: {
//         name: "Sandesh",
//         class: "10A",
//         marks: {
//             math: 30,
//             english: 35,
//             science: 28
//         }
//     },
//     student3: {
//         name: "Mama",
//         class: "10A",
//         marks: {
//             math: 50,
//             english: 60,
//             science: 55
//         }
//     }
// };

// let classTotalMarks = 0;
// let classTotalSubjects = 0;

// for (let key in students) {
//     let student = students[key];
//     let marks = student.marks;
//     let total = 0;
//     let subjects = Object.keys(marks);

//     console.log(`\nStudent Name: ${student.name}`);
//     console.log("Subject-wise Marks:");

//     for (let subject of subjects) {
//         let mark = marks[subject];
//         console.log(`${subject}: ${mark}`);
//         total += mark;
//     }

//     let average = total / subjects.length;
//     classTotalMarks += total;
//     classTotalSubjects += subjects.length;

//     console.log(`Total Marks: ${total}`);
//     console.log(`Average Marks: ${average.toFixed(2)}`);
//     console.log(`Final Result: ${average >= 40 ? "Passed" : "Failed"}`);
// }

// let classAverage = classTotalMarks / classTotalSubjects;
// console.log(`Class Total Marks: ${classTotalMarks}`);
// console.log(`Class Average Marks: ${classAverage.toFixed(2)}`);

// function greetings(){
//     console.log("Hello, welcome to the JavaScript world!");
// }
// setTimeout(greetings, 3000);

// Callbacks are functions passed as arguments to other functions.
// the function that accepts a callback is called the higher-order function.
// function that can take multiple functions as arguments is called a higher-order function.
// first-class functions are functions that can be treated like any other value, such as a number or a string
// callback Hell is a programming pattern where a function is passed as an argument to another function and is executed after some operation is completed.
// promises are a way to handle asynchronous operations in JavaScript.
// asynchronous programming allows us to write code that can run in the background without blocking the main thread.
// async await is a way to write asynchronous code that looks synchronous.

// const greetNamaste = greetings("Namaste");
// greetNamaste("Ujwal");

// function promiseFunction(){
//     return Promise(function(resolve, reject) {
//         resolve("Promise resolved successfully!");
//     });
// }
// promiseFunction().then(function(Result){
// console.log(Result);
// })

// function StatusFunction(ujwal){
//     return new Promise(function(resolve, reject) {
//         if (ujwal === "nolifer") {
//             resolve("Status not resolved!");
//         }
//         else if (ujwal === "lifer") {
//             resolve("Status resolved successfully!");
//         } else {
//             reject("Invalid status!");
//         }
//     });
// }
// StatusFunction("lifer").then(function(Result){
//     console.log(Result);
// }).catch(function(error){
//     console.log(error);
// });

// async function enrichmentclass(){
//     try{
//         let result = await StatusFunction("lifer");
//         console.log(result);
//     } catch(error){
//         console.log("Error:", error);
//     }
// }
// let chuchu = {
//     firstname : "Chuchu",
//     lastname : "TV",
//     age : 19,
//     color : "brown",
//     email: "CHUCHUTV@gmail.com",
//     password: "chuchu123",
// }
// function promiseFunction(email, password) {
//     return new Promise(function (resolve, reject) {
//         if (email === chuchu.email) {
//             resolve("Email is valid!");
//         } else {
//             reject("Invalid email!");
//         }
//     }).then(function (result) {
//         console.log(result);
//         return new Promise(function (resolve, reject) {
//             if (password === chuchu.password) {
//                 resolve("Password is valid!");
//             } else {
//                 reject("Invalid password!");
//             }
//         });
//     });
// }
// async function validateChuchu(){
//     try {
//         const data = await promiseFunction("CHUCHUTV@gmail.com", "chuchu123");
//         console.log(data);
//     }
//     catch(error) {
//         console.log("Error:", error);
//     }
// }
// validateChuchu();
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     email : "john@example.com"
// };
// // Destructuring the person object
// // Rest operator to collect remaining properties
// const {name, ...otherDetails} = person;
// const {age, city, email} = otherDetails;
// console.log("Destructured Details");
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);
// console.log("Email:", email);
// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response=>{return response.json();})
// .then(data=>{
//     console.log("Fetched Data:", data);
//     const {id, name: userName, email: userEmail} = data;
//     console.log("User ID:", id);
//     console.log("User Name:", userName);
//     console.log("User Email:", userEmail);
// })
// .catch(error=>{
//     console.error("Error fetching data:", error);
// });