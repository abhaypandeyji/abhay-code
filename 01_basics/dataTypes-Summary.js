//# Primitive
//(primitive data types are call by value (it provide copy of data instead of original data))
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

//JavaScript is a dynamically typed language,
//which means that data types of variables are determined by 
//the value they hold at runtime and can change throughout 
//the program as we assign different values to them.

const score = 100;
const scoreValue = 100.3;


const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  //let userEmail = undefind;


const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

const bigNumber = 9384759347598342759349857439574398578945743543574358943n;

//# Reference (Non primitive)

// Array, Objects, Functions

const heros = ["krishna", "gopal", "ram"];


let myObj = {
    name: "hitesh",
    age: 22,
}

const myFuction = function(){
    console.log("Hare krishna");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFuction);  //it returns function but it call as Object function;
// console.log("jai shree ram");
// console.log(typeof anotherId);

//https://tc39.es/ecma262/#sec-typeof-operator



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack ( Primitive ), Heap ( Non-Primitive)

let myYoutubeName = "hiteshchoudhary.com";

let anotherName = myYoutubeName;
anotherName = "chaiaurcode";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hihesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);
