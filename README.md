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
