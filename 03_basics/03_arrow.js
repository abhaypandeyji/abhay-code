const user = {
    username: "krishna",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}
// user.welcomeMessage();
// user.username = "Radha";  //when value change means value chage;
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     console.log(this);

// }
// chai();

// const chai = function(){
//     let username = "hitesh";
//     console.log(this.username);
// }
// chai();


// const chai =  () => {
//     let username = "hitesh";
//     //console.log(this.username);
//     console.log(this);

// }
// chai();

 

// const addTwo = (num1, num2) => {   //this is basic arrow function;
//     return num1 + num2;
// }
// console.log(addTwo(12, 13));

//const addTwo = (num1, num2) => num1 + num2;   //this is implicite return function;

//const addTwo = (num1, num2) => (num1 + num2);   //this is implicite return function;

//const addTwo = (num1, num2) => {return num1 + num2;}//whenever you write curly braces then you must use return statement    

const addTwo = (num1, num2) => ({username: "krishna"})

console.log(addTwo(12, 13));







