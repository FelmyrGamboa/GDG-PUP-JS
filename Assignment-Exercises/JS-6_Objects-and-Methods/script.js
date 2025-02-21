// ## Instructions

// 1. **Create a Car Object:**

//    - Define an object named `car`.
//    - Add these properties:
//      - `make` (e.g., "Toyota")
//      - `model` (e.g., "Corolla")
//      - `year` (e.g., 2021)

// 2. **Create a Function:**

//    - Write a function named `getDescription` that accepts the `car` object as a parameter.
//    - Inside the function, combine the car's properties (`make`, `model`, `year`) into one descriptive sentence.
//    - The function should return the sentence in this format:
//      ```
//      This car is a 2021 Toyota Corolla.
//      ```

// 3. **Test Your Code:**
//    - Call the `getDescription` function, passing the `car` object as an argument.
//    - Use `console.log()` to display the output.



// Step 1: Create a car object
const car1 = {};

car1.make = "Imperial"; 
car1.model = "Chrysler 300 Sport"; 
car1.year = "1962";

// Step 2: Create a function to describe the car
function getDescription(car){
    if (car.make == null || car.model == null || car.year == null){
        return "Car Information is not complete.";
    }
    else{
        return `This car is a ${car.year} ${car.make} ${car.model}.`;
    }
}

// Step 3: Call the function and display the result
console.log(`Car Information: \n${getDescription(car1)}`);
