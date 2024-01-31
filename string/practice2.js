const str = "Abrakadabra";
let counter = 0;
for (let i = 0; i <= str.length; i++) {
  if (str[i] === "a" || str[i] === "A") {
    counter++;
  }
}
console.log(counter + " times");
// PS C:\Projects\Log-18\string> node practice1.js
// 5 times
