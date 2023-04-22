// generate btn refers to the generate button in html
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//all possible characters are listed in sepearte arrays according to their category, such as lowercase letters.
// The seperation of categories is important to distinguish between the different characters and use or illiminate 
//according to the users preferences.
function generatePassword(){
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //used 'up' within variable name to stand for user preference. All variables have been given a value so that the 
  //JavaScript can recognise the different data types, all of which are boolean other than the length which is a number.
  var upLowercase = true;
  var upUppercase = true;
  var upNumbers = true;
  var upSpecial = true;
  var upLength = 0;

  //This prompt has been used so that the user can specify how many characters they would like to include in their password.
  //however an if statement has been used to cap the length of the password to be between 8 and 128 characters long.
  //the if statement alerts the user with a message that their password must be between 8 and 128 characters if the answer 
  //provided by the user is not within these parameters. The function isNaN is added to the if statement to ensure that the 
  //user does not use non numeric characters when inputing a prefered password length. If the user does not use numeric 
  //characters they will be alerted to do so. The symbol || stands for 'or' meaning the if statement is checking if 
  //any of these statements are entered incorrectly.

  upLength = window.prompt("How long would you like your password to be?")
  if (upLength <8 || upLength > 128 || isNaN(upLength)) {
    window.alert("Password must include between 8 and 128 characters, this must be written in numeric characters");
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

  // up characters standng for user's preffered characters, obtainable characters following users selection
  var password = "";
  const upCharacters = [];


  // this merges all preffered characters, selected by user, and adds them into the same array
  if (upLowercase) {
    upCharacters.push(lowercase.concat(""));
  }
  if (upUppercase) {
    upCharacters.push(uppercase.concat(""));
  }
  if (upSpecial) {
    upCharacters.push(specialCharacters.concat(""));
  }
  if (upNumbers) {
    upCharacters.push(numbers.concat(""));
  }

  //random characters selected and multiplied by preferred length and added into password
  for (var i = 0; i < upLength; i++) {
    var randomCharacter = upCharacters[Math.floor(Math.random() * upCharacters.length)];
    password += randomCharacter[Math.floor(Math.random () * randomCharacter.length)];
  }

  return (password)
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
