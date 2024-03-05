//1
(() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1) (y = 2);
      console.log(x);//1
    }
    console.log(x);//undefined
    console.log(y);//2
  })();
  //2*
   //!!null; false
   //!!"";false
   //!!1;true
let person = { name: "Lydia" };
const members = [person];
person = null;
console.log(members);//[ { name: 'Lydia' } ]
//
const peerson = {
    name: "Lydia",
    age: 21
  };
  
  for (const item in peerson) {
    console.log(item);//name, age
  }
  //
  const num = parseInt("7*6", 10);
  console.log(num)//7 The parseInt function reads the string from left to right until it encounters the * character. It takes only the numeric part of the string until that point.
//////////////////
  (() => {
   // let x = (y = 10);
  })();
  
  console.log(typeof x);//undefined
  console.log(typeof y);//number
  ///////////
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);//1  first element of the numbers array and assigned it to the variable y. The output is then the value of the first element, which is 1.