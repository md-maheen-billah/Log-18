# Log 18 (Duration: 6 Months)
Today's lesson focused on onject, arrays vs object, cases, trim, more about string, split, join, string reverse, object delete and more.

---

## Object
### Practice Task-1:
Access the `golden rod` color value in output.
```js
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
console.log(colors["golden rod"]);
// PS C:\Projects\Log-18\object> node practice1.js
// #daa520

```
---
### Practice Task-2:
For this object below add a property named `passenger capacity` with value 5
```js
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
console.log(car);
// PS C:\Projects\Log-18\object> node practice2.js                                                  
// {
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2020,
//   'passenger capacity': 5
// }

```
---
### Practice Task-3:
Display the physics marks as output.
```js
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
console.log(student.physics.marks);
// PS C:\Projects\Log-18\object> node practice3.js
// 30

```
---
### Practice Task-4:
Count the `number of properties`.
```js
let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

console.log(Object.keys(student).length);
// PS C:\Projects\Log-18\object>  node practice4.js
// 4

```
---

### Practice Task-5:
Loop through an object and print the key-value pairs with their `types`
```js
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (const prop in myObject) {
  console.log("key: " + prop + " | " + "type: " + typeof myObject[prop]);
}
// PS C:\Projects\Log-18\object>  node practice5.js
// key: name | type: string
// key: age | type: number
// key: city | type: string
// key: isStudent | type: boolean

```
---

## String
### Practice Task-1:
Count how many times a string has the letter `a`
```js
const str = "abrakadabra";
let counter = 0;
for (let i = 0; i <= str.length; i++) {
  if (str[i] === "a") {
    counter++;
  }
}
console.log(counter + " times");
// PS C:\Projects\Log-18\string> node practice1.js
// 5 times

```
---
### Practice Task-2:
Count how many times a string has the letter `a` or `A`
```js
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

```
---
### Practice Task-3:
Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
```js
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

```
---
### Practice Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
```js
let myString = "Xian,xiao,xiang";
if (myString.includes("x") || myString.includes("X")) {
  myString = myString.replace(/x/g, "y").replace(/X/g, "Y");
}
console.log(myString);
// PS C:\Projects\Log-18\string>  node practice4.js
// Yian,yiao,yiang

```
---
### Practice Task-5:
Capitalize Every first Letter of each word in a String
```js
let myString = "hello world";

let capitalizedString = myString.replace(/\b\w/g, function (character) {
  return character.toUpperCase();
});

console.log(capitalizedString);
// PS C:\Projects\Log-18\string>  node practice5.js
// Hello World

```
---
