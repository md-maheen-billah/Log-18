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
