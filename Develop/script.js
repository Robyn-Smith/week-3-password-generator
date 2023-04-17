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
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789"
  const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var uppercase = false;
  var lowercase = false;
  var numbers = false;
  var special = false;
  var length = 0




  
  return ('')
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
