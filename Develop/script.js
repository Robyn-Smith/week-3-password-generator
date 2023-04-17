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

  //used 'up' to stand for user preferrance
  var upLowercase = false;
  var upUppercase = false;
  var upNumbers = false;
  var upSpecial = false;
  var upLength = 0;

  upLength = window.prompt("How long would you like your password to be?")
  if (upLength <8 || upLength > 128) {
    window.alert("Password must include between 8 and 128 characters");
    return;
  }

  //used to find out user preferrances...
  upLowercase = window.confirm("please select OK to include lowercase characters in your password");
  upUppercase = window.confirm("please select OK to include uppercase characters in your password");
  upNumbers = window.confirm("please select OK to include numbers in your password");
  upSpecial = window.confirm("please select OK to include special characters in your password");

 // to avoid user clicking no to all character types...
  if (upLowercase === false && upUppercase === false && upNumbers === false && upSpecial === false) {
    window.alert("you must select at least one type of characters to include in your password");
    return;
  }

  return ('')
  

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
