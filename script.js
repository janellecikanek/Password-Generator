var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z,']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
var symbol = ['!', '@', '#', '$', '%', '^', "&", '*', '(', ')', '-', '+', '=', '<', '>', '?', ' ', '.', ';', "~", "[", ']', '{', '}', "|",]


// THEN I am presented with a series of prompts for password criteria
// THEN I choose a length of at least 8 characters and no more than 128 characters

function charOption() {

  parseInt(passwordLength, 10);

  if (passwordLength < 8) {
    alert("Please enter a number between 8 and 128");
  }

  else if (passwordLength > 128) {
    alert("Please enter a number between 8 and 128");
  }

  else if (passwordLength == !number) {
    alert("Please enter a number between 8 and 128");
  }

  else (
    (passwordLength === !"upperCase") ||
    (passwordLength === !"lowerCase") ||
    (passwordLength === !"symbol"))
  alert("Please choose at least one character type");

}

function generatePassword() {

  var allChar = []
  var password = '';
  passwordlength = Number(password).length;

  //Want to return a string upon generating 
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var passwordLength = prompt("Choose a number from 8 to 128");
  var pickUpperCase = confirm("Would you like to include uppercase letters?");
  var pickLowerCase = confirm("Would you like to include lowercase letters?");
  var pickSymbol = confirm("Would you like to symbols?");

  if (passwordLength != null) {
    // var allChar = allChar.concat(number);
  }
  if (pickUpperCase == true) {
    var allChar = number.concat(upperCase);
  }

  if (pickLowerCase == true) {
    var allChar = number.concat(lowerCase);
  }

  if (pickSymbol == true) {
    var allChar = number.concat(symbol);
  }

  let result = allChar
  result = []
}
// THEN a password is generated that matches the selected criteria

writePassword()
for (var i = 0; i <= password; i++) {
  randomIndex = Math.floor(Math.random() * (allChar.passwordLength));
  password = "allChar[randomIndex]";
  alert("password")
}

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// THEN the password is either displayed in an alert or written to the page
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
