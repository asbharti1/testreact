let str = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
function ittArry(str) {
    if (str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] instanceof Array) {
                for (let j = 0; j < str[i].length; j++) {
                    console.log(str[i][j]);
                }
            }
        }
    }
}
ittArry(str);
//or
var flatArr = [].concat(...str);
for (let i = 0; i < flatArr.length; i++) {
    console.log(flatArr[i]);
}


//check pranthsis
function isValid(str) {
    const status = false;
    const map = { "(": ")", "{": "}", "[": "]" };
    let char = [];
    for (let i = 0; i < str.lengh; i++) {
        if (map[str[i]]) {
            char.push([map[str[i]]]);
        } else if (char.pop() !== str[i]) {
            return status;
        }
    }
    return char.length === 0;
}
console.log(isValid("([{}(){([)]}])"));
// find max age 
function maxArray(array) {
    return Math.max.apply(null, array)
}
let age = [33, 55, 66, 88, 98]
let maxage = maxArray(age)
console.log(maxage)

function minArray(array) {
    return Math.min.apply(null, array)
}
let age1 = [33, 55, 66, 88, 98]
let minAge = minArray(age1)
console.log(minAge)
//with spread array
function maxNum(arr){
    let max = Math.max(...arr);
  return max;
}
console.log( maxNum([33, 55, 66, 88, 98]))
