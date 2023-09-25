
// fir remove duplicate array
function RDuplicate(str) {
    let result = []
    str.forEach(function (element, i) {
        if (str.indexOf(element) === i) {
            result.push(element)
        }
    });
    return result;
}
console.log(RDuplicate([1, 3, 4, 5, 3, 4, 3, 6, 78, 8, 8]))

function remDup(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i])
        }

    }

    return result;
}
console.log(remDup([1, 2, 3, 4, 5, 5, 4, 3]))

function RemoveDup(arr) {
    let result = [];
    for (let i of arr) {
        if (result.indexOf(i) === -1) {
            result.push(i)
        }
    }
    return result;
}
console.log(RemoveDup([2, 4, 2, 4, 3, 5, 6]))
// find duplicate array
function findD(str) {
    let result = [];
    str.forEach(function (element, i) {
        if (str.indexOf(element) !== i) {
            result.push(element)
        }
    })
    return result;
}
console.log(findD([1, 3, 4, 5, 3, 4, 3, 6, 78, 8, 8]))

function fiindD(str) {
    let result = [];
    str.forEach((element, i) => {
        if (str.indexOf(element) !== i) {
            result.push(element)
        }
    })
    return result;
}
console.log(findD([1, 3, 4, 5, 3, 4, 3, 6, 78, 8, 8]))
//or
//WITH LOOPING FOR
const getUniqueArray = (arr) => {
    var result = [];
    for (var i = 0; i < arr.length; i++)
        if (result.indexOf(arr[i]) === -1 && arr[i] !== '')
            result.push(arr[i]);
    return result;
}

console.log(getUniqueArray([1, 2, 3, 3, 2, 2, 2, 1]))
////////////////////
function getUniqueArrays(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getUniqueArrays([1, 2, 3, 3, 2, 2, 2, 1]))
//OR
function getUnique(arr) {

    let result = [];

    // loop through array
    for (let i of arr) {
        if (result.indexOf(i) === -1) {
            result.push(i);
        }
    }
    console.log(result);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);
//or
const numbers = [1, 2, 2, 4, 5, 6, 6];
let duplicateArray = numbers.filter((e, i, a) => a.indexOf(e) !== i);
console.log(duplicateArray);
const number = [1, 2, 2, 4, 5, 6, 6];
let duplicateRemoveArray = number.filter((e, i, a) => a.indexOf(e) == i);
console.log(duplicateRemoveArray);
//or
function Dup(numbers) {
    return numbers.filter((e, i, a) => a.indexOf(e) == i)
}
console.log(Dup([1, 2, 2, 4, 5, 6, 6]))

/////
let arrsay = ['one', 'one', 'one', 'two', 'two', 'three'];
let counts = {};
arrsay.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});
// we can replace the forEach() with find()
console.log(counts);
//out put {one: 3, two: 2, three: 1}
function flatArray(arr) {
    return [].concat(...arr);
}

console.log(flatArray([['foo', 'bar'], ['baz', 'qux']]));
// -> ["foo", "bar", "baz", "qux"]
console.log(flatArray([[1], [2], 3, 4, [5]]));

function add(a) {
    return function (b) {
        if (b) {
            return add(a + b)
        } else {
            return a;
        }

    }
}
console.log(add(5)(5)(3)(4)())

//or
//USE WITH ARROW FUNCTION

let sum = a => b => b ? sum(a + b) : a
console.log(sum(10)(20)(1)(32)())
// two 
let add1 = a => b => a + b;
console.log(add1(5)(4))

function add2(a) {
    return function (b) {
        return a + b
    }
}
console.log(add2(3)(6))
//remove duplicate string
function removeDups(str) {
    let char = str.split("");
    for (let i = 0; i < char.length; i++) {
        for (let j = i + 1; j < char.length; j++)
            if (char[i] == char[j]) {
                char.splice(j, 1);
                j--;
            }
    }
    return char.join("");
}
console.log(removeDups("Int32,Int32,Int32,InInt32,Int32,Double,Double,Double"));

//
var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"
x2 = Array.from(new Set(x.split(','))).toString();
console.log(x2);
//Int32,Double

const arr = [1, 2, 3];
const double = arr.map(function (el) {
    return el * 2;
});
console.log(double); // [2, 4, 6]

const resolveAfter3Seconds = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('Resolved after 3 seconds'), 3000);
    });
};
async function exampleAsyncFunction() {
    const result = await resolveAfter3Seconds()
    console.log(result)
}
exampleAsyncFunction()
//same below
const resols = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('Resolved after 3 seconds'), 3000);
    });
};
resols()
    .then((result) => {
        console.log(result)
    })
//******* Clouser example
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}

console.log(showName("DM", "Luna"));

function showName1(first, last) {
    var nameintro = "My name is "
    function makeName() {
        return nameintro + first + " " + last;
    }
    return makeName();
}
console.log(showName1("Sanjay", "Bharti"));
//or
function f1() {
    var x = 10;

    function f2() {
        console.log(x)
    }

    return f2

}
f1()
//promises example

const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
        return v * 2;
    })

let ar = ['a', 'b', 'c', 'd', 'e', 'e', 'f']
console.log(ar[ar.length - 2])
console.log(3 + "3")//33
console.log(3 - "3")// 0 zero
//remove duplicate string
function myFunction(str) {
    var result = "";
    var temp = {};
    for (i = 0; i < str.length; i++) {
        let char = str[i];
        if (temp[char]) {
            temp[char]++;
        } else {
            temp[char] = 1
            result = result + char;
        }
    }
    return result;
}
console.log(myFunction('abcabcabacvabav'))
//or
function Duplicate(str) {
    var result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (result.includes(char) == false)
            result += char;
    }
    return result
}
console.log(Duplicate("abcabcabcdfgsercv"))

//remove duplicate array in javascript

function RemoveDup1(arr) {
    let result = [];
    for (let i of arr) {
        if (result.indexOf(i) === -1) {
            result.push(i)
        }
    }
    return result;
}
console.log(RemoveDup1([2, 4, 2, 4, 3, 5, 6]))

//find duplicate array

function FindDuplicateArray(str) {
    let result = [];
    str.forEach((e, i) => {
        if (str.indexOf(e) !== i) {
            result.push(e);
        }
    });
    return result;
}
console.log(FindDuplicateArray([1, 2, 3, 4, 5, 6, 3, 4, 5]))
//or
function FindDuplicateArray1(str) {
    let result = [];
    str.forEach((e, i) => {
        if (str.indexOf(e) == i) {
            result.push(e);
        }
    });
    return result;
}
console.log(FindDuplicateArray1([1, 2, 3, 4, 5, 6, 3, 4, 5]))
//revrse string
function reverse(str) {
    let r = "";
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    return r;
}
console.log(reverse("welcome to hyderabad"));
//another
var ini = "hello,world,wow"
var finalString = ini.split(",").reverse().join(",");
console.log(finalString)
// wow,world,hello
let str = "hello,world,wow";
let temp = str.split(",");
let output = "";
// Index will starting from last element
let index = (temp.length - 1);
for (let k = 0; k < temp.length; k++) {
    if (k == (temp.length - 1)) {
        // Last Element so no need of comma
        output += temp[index];
    }
    else {
        // Adding commas to the output
        output += temp[index] + ",";
    }

    index--;
}
console.log(output);
//or
function reverseWords(s) {
    const arr = s.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            arr.splice(i, 1)
            i--
        }
    }
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    return arr.join(" ")
}
console.log(reverseWords("Hello, World, India"))

function ReverseNew(arr) {
    let char = arr.split(",");
    for (let i = 0; i < char.length; i++) {
        for (let j = i + 3; j < char.length; j++) {
            if (char[i] = char[j]) {
                char.splice(j, 1);
                j--;
            }
        }
        return char.join(",")
    }

}
console.log(ReverseNew("Hello, World, India"))
// ascending order
function sortNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let char = arr[i];
            if (arr[i] < arr[j]) {
                arr[i] = arr[j];
                arr[j] = char;
            }
        }
    }
    return arr;
}
console.log(sortNumbers([4, 5, 6, 9, 2, 1, 3]));
//or
var numArray = [140000, 104, 99];
let numArrasy = numArray.sort(function (a, b) {
    return a - b;
});
console.log(numArrasy);

var decArr = [140000, 104, 99];
let descendArr = decArr.sort(function (a, b) {
    return b - a;
});
console.log(descendArr);

//count value
const arrs = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const countsy = {};

for (const i of arrs) {
    countsy[i] = countsy[i] ? countsy[i] + 1 : 1;
}
//or
let arrsayy = ['one', 'one', 'one', 'two', 'two', 'three'];
let countss = {};
arrsayy.forEach((x) => {
    countss[x] = (countss[x] || 0) + 1;
});
// we can replace the forEach() with find()
console.log(countss);
//out put {one: 3, two: 2, three: 1}
let a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
result = {};
for (var i = 0; i < a.length; i++) {
    if (!result[a[i]])
        result[a[i]] = 0;
    ++result[a[i]];
}
console.log(result)

//or
let ay = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
let result = {};
for (let i = 0; i < ay.length; i++) {
    if (!result[ay[i]]) {
        result[ay[i]] = 0;
    }
    ++result[ay[i]];

}
console.log(result)
//or
// let ay = "sanjnay bharti";
// let rsult = {};
// for (let i = 0; i < ay.length; i++) {
//     if (!rsult[ay[i]]) {
//         rsult[ay[i]] = 0;
//     }
//     ++rsult[ay[i]];
// }
// console.log(rsult)



const arr4 = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
const result4 = arr4.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
console.log(result4);
let www = [1, 25, 49, 91, 121, 125, 144, 151]

//find the max number
function getArrayMax(array) {
    return Math.max.apply(null, array);
}
function getArrayMin(array) {
    return Math.min.apply(null, array);
}
var ages = [11, 54, 32, 92];
var maxAge = getArrayMax(ages); //92
console.log(maxAge);
var minAge = getArrayMin(ages); //11
console.log(minAge);
//another solution
function findMax(arr) {
    let largest = [];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}
let abd = [11, 54, 32, 97];
console.log(findMax(abd));

// add 
function Add(a) {
    return function (b) {
        if (b) {
            return add(a + b);
        }
        return a;
    }
}
console.log(add(2)(4)(5)())

//or
let add3 = a => b => b ? add(a + b) : a;
console.log(add3(3)(4)(5)())

//for update the object
let emp = {
    name: "Daniel",
    age: 23
};
const name = "Sanjay Bharti"
const age = 21
let emp1 = { ...emp, name, age }
console.log(emp1)
//{ name: 'Sanjay Bharti', age: 21 }
//for delete property
delete emp1.age
console.log(emp1)
//{ name: 'Sanjay Bharti' } 

//add new property
let newData = { city: "Kanpur" }
emp1 = { ...emp, ...newData }
console.log(emp1)
//{ name: 'Daniel', age: 23, city: 'Kanpur' }

var x = "sanjaybharti"
let x2 = Array.from((x.split("")));
//let counts = {};
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