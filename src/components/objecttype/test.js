let arry=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function Tewt(str){
    for(let i=0; i<str.length; i++){
        if(typeof str[i] ==='string'){
            console.log(str[i])
        }
    }
    
}
Tewt( arry)

function test(arr) {
    let result = [];
    let temp = {};
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let str = JSON.stringify(obj);
        if (!temp[str]) {
            result.push(obj);
            temp[str] = true;
        }
    }
    return result;
}

console.log(test([{ id: 1 }, { id: 2 }, { id: 2 }, { id: 4 }, { id: 2 }, { id: 5 }, { id: 6 }, { id: 6 }]));
function findduplicate(arr){
    let result ={};
    let duplicateArr =[];
    for(let i=0; i< arr.length; i++ ){
        let char = arr[i]
if (result[char] ){
    duplicateArr.push(char)
}else{
    result[char] =1
}
   
}
    return duplicateArr
}
console.log(findduplicate([4,6,7,8,9,4,5,67,7]))

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

//revrse string
function reverse(str) {
    let r = "";
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    return r;
}
console.log(reverse("welcome to hyderabad"));

//check pranthsis
function isValid(str) {
    const status = false;
    const temp = { "(": ")", "{": "}", "[": "]" };
    let char = [];
    for (let i = 0; i < str.lengh; i++) {
        if (temp[str[i]]) {
            char.push([temp[str[i]]]);
        } else if (char.pop() !== str[i]) {
            return status;
        }
    }
    return char.length === 0;
}
console.log(isValid("([{}(){([)]}])"));