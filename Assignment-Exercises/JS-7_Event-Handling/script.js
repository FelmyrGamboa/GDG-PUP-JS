// ## Instructions 🛠️

// ### Step 1: Open the Project

// - Open the provided `index.html` file in your text editor to view the button setup.
// - Open `styles.css` to see the styles already applied.

// ### Step 2: Write the JavaScript

// 1. Open the `script.js` file.
// 2. Complete the following steps:
//    - Use JavaScript to **select the button** in `index.html`. Hint: Look at the button's `id` attribute.
//    - Add an **event listener** to the button that listens for a `click` event.
//    - Inside the event listener, create a way to **generate random colors**. Hint: Use a method that involves random numbers and hexadecimal values.
//    - Apply the generated color to the `document.body.style.backgroundColor` property.

let button = document.getElementById("colorButton");

button.addEventListener('click', function(){
    let randomColor = Math.trunc((Math.random() * 16777216));
    document.body.style.backgroundColor = `#${randomColor.toString(16)}`;
})