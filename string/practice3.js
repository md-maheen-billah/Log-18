const myString = "sequoia";
const vowels = "aeiou";
let containsAllVowels = true;

for (const vowel of vowels) {
  if (myString.toLowerCase().includes(vowel)) {
    continue;
  }
  containsAllVowels = false;
  break;
}

if (containsAllVowels) {
  console.log("The string contains all vowels.");
} else {
  console.log("The string does not contain all vowels.");
}
// PS C:\Projects\Log-18\string> node practice3.js
// The string contains all vowels.
