// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
//string is more powerful and it has many function so generally convert a number into
//string to perform various operation like concatination finding length of number and etc;


// console.log(balance.toFixed(2));
// console.log(balance.toFixed(3));
// console.log(balance.toFixed(4));

//const otherNumber = 1123.8966;
// console.log(otherNumber.toPrecision(3));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision#examples

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());//this US standards
// console.log(hundreds.toLocaleString('en-IN'));//this is US standards

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

//------------------------------------------Math---------------------------------------------------------
// console.log(Math);
// console.log(Math.abs(-4));
//console.log(Math.round(5.7));
//round means intellectual rounding off 4.3 => 4 | 4.4 => 4 | 4.5 => 5 | 4.6 => 5 
// console.log(Math.ceil(4.1));  //as name suggests ceil means upper value 4.1 => 4
// console.log(Math.floor(6.9)); //as name suggests floor means down value 6.9 => 6

// console.log(Math.min(1,4,6,4,4,5,6,67,5));
// console.log(Math.max(3,4,5,54,6,5,6,7,5,3));
console.log(Math.random()); //random functin generates number between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + 10);










