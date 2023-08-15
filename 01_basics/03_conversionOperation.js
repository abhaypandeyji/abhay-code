let score  = "12";
console.log(typeof score);
let scoreNumber = Number(score);
console.log(typeof scoreNumber);
score = "12abc";
scoreNumber = Number(score);
console.log(scoreNumber);
console.log(typeof scoreNumber);

let flag = true;
console.log(typeof flag);
let num = Number(flag);
console.log(num);
let name = ""
flag = Boolean(name);
console.log(flag);
flag = Boolean("krishna");
console.log(flag);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0  "" => false   "abc" => true

let isLoggedIn = 0; //or 123 or -123 => true but when number is zero then only false;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn);

//when you convert any non zero number then conversion in boolean will be true;
//when you convert zero then conversion in boolean will be false;

let someNumber = 12;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//*********************************Operation******************************************************/
console.log(100/4);
console.log(19%4);
console.log(2*3);
console.log(2**3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "4");
console.log("1" + 2 + 3);

console.log(true);
console.log(+true);
console.log(false);
console.log(+false);


console.log("play with empty string");

console.log(+"");
console.log(+"abc");

let gameCounter = 100;
console.log(gameCounter);
console.log(gameCounter++);
gameCounter = 100;
console.log(++gameCounter);






