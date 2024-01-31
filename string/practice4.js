let myString = "Xian,xiao,xiang";
if (myString.includes("x") || myString.includes("X")) {
  // Replace 'x' with 'y' and 'X' with 'Y'
  myString = myString.replace(/x/g, "y").replace(/X/g, "Y");
}
console.log(myString);
// PS C:\Projects\Log-18\string>  node practice4.js
// Yian,yiao,yiang
