//array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [0, 1, 2, 3, 4, 5];
//js array may contain heterogeneous data types 

const myArr2 = ['krishna','Radha','ram','sita','shiv shakankar','hanumanJee'];
// console.log(myArr[1]);
// console.log(myArr2[3]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// const a = myArr.pop();
// console.log(a);
// console.log(myArr);

// myArr.unshift(9); //it is same like push() but it add the item at the begining by shifting all the element;
// myArr.unshift(10);
// myArr.shift(); //it is same like pop() but remove item from the begining


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(10)); // if element not present in array then it returns -1;


const newArr = myArr.join(); //it converts array to string

// console.log(myArr);
// console.log(newArr);

//slice, splice

console.log("A = ",myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B = ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);

console.log("C = ", myArr);
