// ## Instructions

// ### 1. **script.js**

// In this file, you will implement the `checkAge()` function. This function will:

// #### Retrieve the User's Age Input:
// - The user's age is retrieved using `document.getElementById('ageInput').value`. This fetches the value from the input field with the ID `ageInput`. 

// #### Categorize the Age:
// - Use **if-else statements** to check the user's age and categorize them:
//     - **Child**: If the age is between 0 and 12, set the `category` variable to "Child".
//     - **Teenager**: If the age is between 13 and 19, set the `category` variable to "Teenager".
//     - **Adult**: If the age is 20 or greater, set the `category` variable to "Adult".
//     - **Invalid Age**: If the age is a negative number or any other invalid input, set the `category` variable to "Invalid age. Please enter a valid number."

function checkAge() {
    // stored the retrieved values and elements in a variable
    let age = document.getElementById("ageInput").value;
    let result = document.getElementById("result");

    // converts age into an integer and checks if it is a valid number
    age = parseInt(age)

    // handles input age if they are negative number or not a number
    if (age < 0 || isNaN(age) ){
        result.innerHTML = "Invalid age. Please enter a valid number.";
    }
    
    // handles the condition for child age range
    else if ( 0 <= age && age <= 12){
        result.innerHTML = `Your age: ${age}<br><br> You are a Child`;
    }

    else if ( 13 <= age && age <= 19){
        result.innerHTML = `Your age: ${age}<br><br> You are a Teenager`;
    }

    else if ( age >= 20){
        result.innerHTML = `Your age: ${age}<br><br> You are an Adult`;
    }
}
