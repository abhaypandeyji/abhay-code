//Dates

let myDate = new Date();
console.log(myDate);  
//2023-08-19T10:29:09.793Z 

console.log(myDate.toString());
//Sat Aug 19 2023 10:26:16 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());
//Sat Aug 19 2023

console.log(myDate.toISOString());
//2023-08-19T10:31:00.277Z

console.log(myDate.toJSON());
//2023-08-19T10:32:32.777Z

console.log(myDate.toLocaleDateString());
//8/19/2023

console.log(myDate.toLocaleString());
//8/19/2023, 10:36:49 AM

console.log(myDate.toLocaleString('en-IN'));
//19/8/2023, 10:35:15 am

console.log(myDate.toLocaleTimeString());
//10:37:41 AM

console.log(myDate.toTimeString());
//10:38:39 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString());
//Sat, 19 Aug 2023 10:39:28 GMT

// console.log(typeof myDate); //Date is object

//let myCreatedDate = new Date(23, 0, 23);
//console.log(myCreatedDate.toDateString()); //Tue Jan 23 1923
//In JavaScript month starts with 0;

//let myCreatedDate = new Date(23, 0, 23, 5, 3, 44); //parameter for day, month, year, hours, minute, second
//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


//console.log(Date.now());
//date in miliseconds this is use when we need to compare date in hotel management like applications

//console.log(Date.now()/1000);

//console.log(Math.floor(Date.now()/1000));
//to avoid value in fraction we just need to use floor not ceil

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());
console.log(newDate.getUTCDate());
console.log(newDate.getUTCDay());
//above are methods used in application;


newDate.toLocaleDateString('default', {
    weekday: "long",
});












