let myString = "hello world";

let capitalizedString = myString.replace(/\b\w/g, function (character) {
  return character.toUpperCase();
});

console.log(capitalizedString);
// PS C:\Projects\Log-18\string>  node practice5.js
// Hello World
