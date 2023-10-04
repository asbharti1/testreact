
var x = "sanjaybharti"
let x2 = Array.from((x.split("")));
let counts = {};
x2.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
//add middle postion in any ary
let arrl = [1, "2", "7", 4, 3, 1, 2, "5", 3]
let templ = []
for (let i = 0; i < arrl.length; i++) {
    if (i === 2 || arrl[i] === "5") {
        templ.push(10)
    } else {
        templ.push(arrl[i])
    }
}
console.log(templ)
////[1, "2", 10, 4, 3, 1, 2, 10, 3]
//or
// Sample array
let myArray = [10, 20, 40, 50];
// Element to add to the middle
let elementToAdd = 30;
// Calculate the middle index
let middleIndex = myArray.length / 2;
// Use slice and concat to add the element to the middle
let newArray = [...myArray.slice(0, middleIndex), elementToAdd, ...myArray.slice(middleIndex)];
console.log(newArray); // Output: [10, 20, 30, 40, 50]

//check even and odd number
const numb = 16
console.log((numb & 1) ? 'Odd' : 'Even')
//or
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage
console.log(checkEvenOrOdd(4));  // Output: Even
console.log(checkEvenOrOdd(7));  // Output: Odd
//remove duplicate array and string
function Test(str) {
    let result = "";
    let temp = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (temp[char]) {
            temp[char]++
        } else {
            temp[char] = 1;
            result += char;
        }
    }
    return result;
}
console.log(Test("asbhartiasbhartiasbharti"))//"asbhrti"
console.log(Test([5, 5, 5, 2, 2, 2, 2, 2, 9, 4]))//"5294"

//string and array both will work
function test1(str) {
    let rsult = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!rsult[char]) {
            rsult[char] = 0;
        }
        ++rsult[char];
    }

    return rsult; // Return the result object
}

console.log(test1([5, 5, 5, 2, 2, 2, 2, 2, 9, 4]));   
console.log(test1('sanjaybharti'));
console.log(test1(['one', 'one', 'one', 'two', 'two', 'three']));
//find duplicate aaray and string
function findDuplicates(arr) {
    let counts = {};
    let duplicates = [];
    for (let item of arr) {
        if (counts[item]) {
            duplicates.push(item)
        } else {
            counts[item] = 1;
        }
    }
    return duplicates
}
console.log(findDuplicates([5, 2, 3, 2, 1, 3, 4, 4, 5]))
console.log(findDuplicates("sanjaya"))
//or
function findDuplicatess(arr) {
    let result = [];
     let temp = {};
    for (let  i = 0; i < arr.length; i++) {
        let char =arr[i];
        if (temp[char]) {
            result.push(char)
        } else {
            temp[char] = 1;
        }
    }
    return result
}
console.log(findDuplicatess([5, 2, 3, 2, 1, 3, 4, 4, 5,6,6]))
// remove duplicate array 
function removeDuplicates(arr) {
    let uniqueArray = [];
    let counts = {};
    for (let item of arr) {
        if (!counts[item]) {
            counts[item] = 1;
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates([5, 2, 3, 2, 1, 3, 4, 4, 5])); // Output: [5, 2, 3, 1, 4]
console.log(removeDuplicates("sanjaysanjaysanjay"));//["s", "a", "n", "j", "y"]
//or 
function remDuplicates(arr) {
    let uniqueArray = [];
    let counts = {};

    for (let i =0; i< arr.length; i++) {
      let char =arr[i];
        if (!counts[char]) {
            counts[char] = 1;
            uniqueArray.push(char);
        }
    }

    return uniqueArray;
}
console.log(remDuplicates([5, 2, 3, 2, 1, 3, 4, 4, 5])); // Output: [5, 2, 3, 1, 4]
// reverse string
function reverse(str) {
    let r = "";
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    return r;
}
console.log(reverse("welcome to hyderabad"));
//or
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("Hello, World!")); // Output: "!dlroW ,olleH"
