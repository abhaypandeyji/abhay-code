// console.log(2>1);
// console.log(4<2);
// console.log(2!=2);

// console.log(4!=3);
// console.log(2<=6);
// console.log(3>=4);
// console.log(2==2);


// console.log("2" > 1);
// console.log("02" > 2);

// console.log(null>0);
// console.log(null==0);        //avoid such comparisions
// console.log(null>=0);

// the reason is that an equality check == and comparisions > < <= >= work differently.
//Comparisions convert null to a number, treating it as 0.
//That's why (3) null>=0 is true and (1) null>0 is false;

// console.log(undefined == 0);
// console.log(undefined > 0);    //avoid such comparisions
// console.log(undefined < 0);

// === it compare data types as well as value of data both
//but == it compare only content not data type of value;
console.log("2"==2);
console.log("2"===2);


