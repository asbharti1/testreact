//create new object add/delete value 
let user = {};
user.name = "Sanjay";
user.age = 36;
console.log(user)//{ name: 'Sanjay', age: 36 }
delete user.age
console.log(user)//{ name: 'Sanjay' }
//for encoded and decoded 
var originalString = "This is a test string!";
var encodedString = encodeURI(originalString);
console.log(encodedString);
// Output: "This%20is%20a%20test%20string%21"
var encodedString = "This%20is%20a%20test%20string%21";
var decodedString = decodeURI(encodedString);
console.log(decodedString);
// Output: "This is a test string!"