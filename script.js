// Assignment Code
var getLength = 0;
var isCharTypeNum = "false";
var isCharTypeUpper = "false";
var isCharTypeLower = "false";
var isCharTypeSpecial = "false";
var newPassword = [];
var generateBtn = document.querySelector("#generate");
var displayPasswordEl = document.querySelector("#password");

const typeLowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const typeUpperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const typeNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const typeSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    event.preventDefault()
    getUserInput();
    generateChoicesArray();
    writePassword();
    choicesArray = [];
});

function getUserInput() {
  getLength = prompt("How long would you like your password to be? Must be between 8-128 characters:");
  isCharTypeNum = confirm("Would you like your password to use numbers?");
  isCharTypeUpper = confirm("Would you like your password to use uppercase letters?");
  isCharTypeLower = confirm("Would you like your password to use lowercase letters?");
  isCharTypeSpecial = confirm("Would you like your password to use special characters?");
};

var choicesArray = [];

function generateChoicesArray() {
    if (isCharTypeUpper == true)
        choicesArray = choicesArray.concat(typeUpperCaseLetters);
    if (isCharTypeLower == true)
        choicesArray = choicesArray.concat(typeUpperCaseLetters);
    if (isCharTypeNum == true)
        choicesArray = choicesArray.concat(typeNumbers);
    if (isCharTypeSpecial == true)
        choicesArray = choicesArray.concat(typeSpecialCharacters);
};

// Write password to the #password input
function writePassword() {
    if (choicesArray.length < typeNumbers.length || getLength < 8) {
        alert("The options you selected will not generate a password")
    } else {
        for (i = 0; i < getLength; i++) {
            newPassword += choicesArray[Math.floor(Math.random() * (choicesArray.length - 1))];
        }
        displayPasswordEl.textContent = newPassword;
    };
    newPassword = [];
}
