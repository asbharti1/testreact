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

function isValids(str) {
    const parentheses = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const stack = [];
    
    for (let char of str) {
        if (Object.keys(parentheses).includes(char)) {
            stack.push(char);
        } else if (parentheses[stack.pop()] !== char) {
            return false;
        }
    }
    
    return stack.length === 0;
}

console.log(isValids("[]()"));
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
//withlooping
function maxNum2(arr){
    let max =[]
    for(let i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max;
}
console.log( maxNum2([33, 55, 66, 88, 98]))

//
function func(x){
    console.log(typeof x, arguments.length);
    }
    func(); //==> "undefined", 0
    func(7); //==> "number", 1
    func("1", "2", "3"); //==> "string", 3

    //delete method 
var X = { foo : 1}; 
var Output = (function() 
{ 
delete X.foo; 
return X.foo; 
} 
)(); 
//The output would be undefined. The delete operator is used to delete the property of an object. Here, x is an object which has the property foo, 
//and as it is a self-invoking function, we will delete the foo property from object x. After doing so, when we try to reference a deleted property foo, the result is undefined.
var Employee =
{
company: 'xyz'
}
var Emp1 = Object.create(Employee);
delete Emp1.company 
console.log(Emp1.company);
//The output would be xyz. Here, Emp1 object has company as its prototype property. The delete operator doesn’t delete prototype property. emp1 object doesn’t have company as its own property.
// However, we can delete the company property directly from the Employee object using delete Employee.company.


function writepas () {
    let name ="Sanjay Bharti"
    let dob =1986;
    let n = name.length;

    let genpass =name.charAt(0);
    let genpass2 =name.charAt(1);
    let genpass3 =name.charAt(n-2);
    let genpass4 =name.charAt(n-1);

var tsetcheck = genpass+genpass2+dob+genpass3+genpass4
    console.log(tsetcheck)
 var check = "Sa1986ti"   ;
    if(check == tsetcheck){
        console.log("correct password");
                   // window.alert("correct password")

    }else{
            console.log("wrong password");
          //  window.alert("Incorrect Password")
    }
}
writepas();