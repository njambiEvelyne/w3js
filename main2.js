const person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue",
}
// Creating and adding elements in an empty object
const person2 = {}
person2.firstName = "John",
person2.lastName = "Doe",
person2.age = 20,
person2.eyeColor = "blue",
console.log(person2);

// Using the new Keyword
const person3 = new Object({
  firstName:"John",
  lastName:"Do",
  age:70
});
console.log(person3);
person3.firstName = "Evelyne";
console.log(person3);

//Event handlers
function clickme(){
  alert("The Button was clicked!");
}

//The use of the back qutes allows for multiline content
let text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);
