// ## Instructions 🛠️

// ### Step 1: Open the Project

// - Open the provided `script.js` file in your text editor.
// - Read through the comments in the file to understand the structure.

// ### Step 2: Complete the JavaScript

// 1. Create an array named `favoriteMovies`.
// 2. Add some movie titles as strings to the `favoriteMovies` array.
// 3. Use a loop to iterate through the `favoriteMovies` array.
//    - Inside the loop, log each movie to the console.  
//      Hint: Use the array's `length` property in your loop condition.

let favoriteMovies = [
    "Koe no Katachi",
    "To Every You I've Loved Before", 
    "To Me, The One Who Loved You",
    "Josee, the Tiger and the Fish", 
    "The Moment you fall in Love",
    "Fantastic Beasts and Where to Find Them", 
    "Fantastic Beasts: The Crimes of Grindelwald", 
    "Fantastic Beasts: The Secrets of Dumbledore", 
    "Ang Kwento Nating Dalawa", 
    "Tayo sa Buling Buwan ng Taon"
]

console.log("My Favorite Movies: ")
for (let index = 0; favoriteMovies.length > index; index++){
    console.log(`   ${favoriteMovies[index]}`);
}