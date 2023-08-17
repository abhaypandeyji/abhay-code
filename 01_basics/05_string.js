const name = "hitesh";
const repoCount = 50;

//console.log("hello world my name is "+name+" and my repo count is "+repoCount);
//this out dated syntax and is not used now a days


//console.log(`hello world my name is ${name} and my repo count is ${repoCount}`);
//this modern used syntax and easy and efficient 
//this concatination technique of string and variable together is known as String 
//interpolation

//how to declare String 
const gameName = new String('hitesh-hc');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(-6,4);
// //if you give -ve in substring() the it convert -ve to 0|| we need to avoid to use -ve in substring()

// console.log(newString);

//const anotherString = gameName.slice(-6,5);
//here in slice() you can give -ve | when you give -ve in slice then it counts from reverse side

// console.log(anotherString);

const newStringOne  = "    hitesh    ";

console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20','_'));

console.log(url.includes('hitesh'));
console.log(url.includes('ram'));


const supremeLordName = "krishna-ram-narshimha-vamandev-parshuram";
console.log(supremeLordName.split('-'));

console.log(gameName.bold());
console.log(gameName.blink());







