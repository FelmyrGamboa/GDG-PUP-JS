// ## Instructions

// 1. **Task 1: For Loop**

//    - Write a `for` loop to iterate from 1 to 10.
//    - Print each number using `console.log()`.

// 2. **Task 2: While Loop**

//    - Write a `while` loop to print a list of 10 items of your choice (e.g., hobbies, interests, or favorite foods).
//    - Use `console.log()` to display each item.

// 3. Save your work in a file named `scripts.js`.

// 4. Run your code using Node.js or in your browser's developer console to view the output.

// Task 1
for (let i = 1;  i < 11; i++){
  console.log(`Number: ${i}`);
}

// Task 2
let hobbies = [
  "Listening to music", 
  "Watching series",
  "Sleeping", 
  "Playing badminton", 
  "Watching sports matches", 
  "Playing instruments", 
  "Playing video games",
  "Coding", 
  "Beef Wellington", 
  "Banana", 
]

console.log("\nMy Hobbies: ")
let index = 0;
while (hobbies.length != index) {
  console.log(`${index+1}. ${hobbies[index]}`);
  index++;
}



// sample code
// // scripts.js

// // Example Using a for loop to print numbers 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(`Number: ${i}`);
// }

// // Using a while loop to print a list of hobbies
// let hobbies = [
//   "Reading", // Example hobby
//   "Writing", // Example hobby
//   // Add more hobbies
// ];

// let index = 0;
// while (index < hobbies.length) {
//   // Log each hobby and see if it works in the console

//   index++;
// }
