# week-3-password-generator
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Description

This website generates passwords according to the users preferences. When the user clicks the generate password button a series of prompts appear on the screen. The user can input how many characters long they would like they password, with a limit that this number must be between 8 and 128 characters. If the user selects a number that is not between 8 and 128 they will be alerted and the event stops. When the user selects a desired password length within the scope they are asked whether or not they wish to include numbers, lowercase letters, uppercase letters or special characters, this is confirmed by clicking OK or cancel. 