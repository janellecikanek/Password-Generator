var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h" ,"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "<", ">", "?", " ", "." ,";" ,"~" ,"[", "]", "{", "}", "|",]

function generatePassword() {

  var allChar = []
  var password = '';
  var passwordLength = prompt("Choose a number from 8 to 128");

  if (confirm("Would you like to include uppercase letters?")) {
    allChar = allChar.concat(upperCase);
  }
  if (confirm("Would you like to include lowercase letters?")) {
    allChar = allChar.concat(lowerCase);
  }
  if (confirm("Would you like to symbols?")) {
    allChar = allChar.concat(symbol);
  }
  if (confirm("Would you like to include numbers")) {
    allChar = allChar.concat(number);
  } if (allChar.length === 0) {
    alert("You must have one character type to create a password")
    generatePassword()
  } else {
    for (let i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChar.length);
      password += allChar[randomIndex];
    }
  }
  document.querySelector("#password").innerHTML = password;
}

// THEN a password is generated that matches the selected criteria

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// THEN the password is either displayed in an alert or written to the page
// Write password to the #password input


// // WHEN I click the button to generate a password
generateBtn.addEventListener("click", generatePassword);