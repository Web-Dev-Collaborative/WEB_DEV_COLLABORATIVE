
// Variables for end user selections
var upperCaseElement = document.querySelector("#uppercase"); // false | true
var lowerCaseElement = document.querySelector("#lowercase");
var numberElement = document.querySelector("#numbers");
var symbolElement = document.querySelector("#symbols");
var length = document.querySelector("#length");
var generateButton = document.querySelector("#generate");
var result = document.querySelector("#result");


// Global variables
var isUpperCase = true;
var isLowerCase = true;
var isNumbers = true;
var isSymbols = true;

// Make an array for all the possible characters used to make up the password
let alphabet = "abcdefghijklmnopqrstuvyxz";
let numbers = "0123456789";
let symbols = "~`!@#$%^&*()_-+=?";

// Generate the password
generateButton.addEventListener('click', function(event) {
    console.log('Value: ', length.value);
    generateUserPassword(); // hfshah9!
});

upperCaseElement.addEventListener('change', function() {
    isUpperCase = upperCaseElement.checked; // reset
});


lowerCaseElement.addEventListener('change', function() {
    isLowerCase = lowerCaseElement.checked;
});


numberElement.addEventListener('change', function() {
    
    isNumbers = numberElement.checked
});


symbolElement.addEventListener('change', function() {
    
    isSymbols = symbolElement.checked;
});

var userLength = 8; // hard coded

function generateUserPassword() {
    var password = '';

    for (var i = 0; i < userLength; i++) {
        var randomLetterNumber = Math.floor(Math.random() * alphabet.length); // 0
        var letter = alphabet[randomLetterNumber]; // b

        password +=  letter;
    }

    if (isUpperCase === true) {
        var randomLetterNumber = Math.floor(Math.random() * alphabet.length); // 0
        var letter = alphabet[randomLetterNumber].toUpperCase(); // b

        password += letter;
    }

    if (isSymbols === true) {
        var randomSymbolNumber = Math.floor(Math.random() * symbols.length); // 0
        var symbol = symbols[randomSymbolNumber];

        password += symbol;
    }

    // TODO
    // Wrap this into a conditional logic
    var randomNumber = Math.floor(Math.random() * numbers.length); // 0
    var num = numbers[randomNumber];

    password += symbol + num + letter;
    console.log(password);

    result.innerHTML = password;
};









// // This indicates what to do with number strings and splitting into an array
// let lowerCase = alphabet.split();
// console.log(lowerCase);
// let upperCase = alphabet.toUpperCase().split("");
// console.log(upperCase);
// let numberOptions = numbers.split();
// console.log(numberOptions);
// let symbolOptions = symbols.split();
// console.log(symbolOptions);

// let userInput = 'Placeholder';
// // prompt("enter password length")  // Returns a string

// // Console.log all items to ensure they are working
// console.log("#uppercase", option1);
// console.log("#lowercase", option2);
// console.log("#numbers", option3);
// console.log("#symbol", option4);

// console.log(lowerCase);
// console.log(upperCase);
// console.log(numbers);
// console.log(symbols);

// console.log(Math.floor(Math.random() * 26));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 17));

// // Random number from 0 to 25
// let randomIndex = Math.floor(Math.random() * 26);

// function generatepassword(userInput, character, length) {
//     for(let i=0; i < userInput; i++) {
//         var randomLetter = character[Math.floor(Math.random()*length)]
//     };
        
// }
// // If conditions
// if (userInput < 8) {
//     alert("Your password is too short")
// }

// else if (userInput > 128) {
//     alert("Your password is too long")
// }

// if (option1.checked === true) {
//     console.log("Working");
// }
// if (option2.checked === true) {
//     console.log("Working");
// }
// if (option3.checked === true) {
//     console.log("Working");
// }
// if (option4.checked === true) {
//     console.log("Working");
// }

let wordbank = [];

//Arrays I made
// wordbank.push(){
//     console.log(wordbank);
// }



// Create a for loop to select 10 characters from the array