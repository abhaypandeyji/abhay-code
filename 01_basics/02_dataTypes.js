"use strict";
let number = 12334;
let nam = "krishna";
let isLoggedIn = false;
let state = null;  //null data types contains only one value that is null
console.log(typeof nam);
console.log(typeof isLoggedIn);
console.log(typeof state);
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


//number => -(2^53 + 1) to (2^52 -1)

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(number);


//bigInt

const x = BigInt(Number.MAX_SAFE_INTEGER);  //9007199254740991n
console.log(x);

const y = BigInt(Number.MAX_VALUE);
const z = BigInt(Number.MAX_VALUE);

const res = y*z;
const a = BigInt(1);
console.log(res+a); //Number type Cannot mix BigInt and other types, use explicit conversions

//boolean => true / false
//Boolean values are usually used for conditional operations, 
//including ternary operators, if...else, while, etc.


//String data type
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters



