let a=4;
console.log(a);//4
var b=100;
//window.b//100
//with the window object we can access the b value 
// let c=10;
// var c=20; we can not declare the same variable at the same scope but in var same variable we can use like
var d=23;
var d=35;
console.log(d)// 35

let a1;
a1=10
console.log(a1) 
//same way we can not use in const
//const a2;
//'const' declarations must be initialized.
let a2=10
console.log(a2)

// Uncaught SyntaxError: Missing initializer in const declaration
const f=200;
f =10000
// TypeError: Assignment to constant variable.
//const b; SyntaxError: Missing initializer in const declaration
//duplicate declaration then  SyntaxError

console.log(b)
var cd =10;
//ReferenceError: b is not defined
   