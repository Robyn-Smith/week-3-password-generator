// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//find users preferances
function generatePassword(){
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //used up to stand for user preferrance
  var upLowercase = false;
  var upUppercase = false;
  var upNumbers = false;
  var upSpecial = false;
  var upLength = 0;

  upLength = window.prompt("How long would you like your password to be?")
  if (upLength <8 || upLength > 128) {
    window.alert("Password must include between 8 and 128 characters");

    return ('')
  }




  

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
