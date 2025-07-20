/*Task 1: Identify Issues
Problems in this code:

a, b, and c are vague and not descriptive.

They don't follow camelCase or meaningful naming conventions.

There’s no context or structure to enhance clarity (e.g., location, hobbies, or account details).*/

//Task 2: Refactor the Code (Descriptive Names)

let userName = "John";
let userAge = 25;
let isSubscribed = true;

console.log("Name: " + userName);
console.log("Age: " + userAge);
console.log("Subscribed: " + isSubscribed);

 /*Task 3: Enhance the Program (Add Variables)
Let’s add:

userLocation – to indicate where the user lives.

userHobbies – an array of hobbies for more detail.*/



let userLocation = "New York";
let userHobbies = ["Reading", "Cycling"];


console.log("Location: " + userLocation);
console.log("Hobbies: " + userHobbies.join(", "));

