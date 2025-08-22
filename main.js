function myFunction(){
  document.getElementById("demo").innerHTML="<h2>Paragraph Changed</h2>";
}

// Note that when one is using the innerHTML method, it is used to alter the HTML element
// innerText is used when you want to alter the plain text
// There is also anoter method called the ]document.write(). This method when used after an HTML document, it deletes all the existing HTML
window.alert(2-6);
console.log("This shows the use of the arrow functions in Js:");
let calculate = (a,b) => a *b;
let ans = calculate(2,3);
console.log(ans);

//Objects
//Below shows a constructor Object
function Person(first, last, age, eye){
  this.first = first;
  this.last = last;
  this.age = age;
  this.eye = eye;
}
let person1 = new Person("Evelyne", "Njambi", 19, "black");
console.log(person1);

//The use of events
