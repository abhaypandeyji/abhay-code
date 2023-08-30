
function sayMyName(){
    console.log("Jai shree krishna");
    // console.log("H");
    // console.log("i");
    // console.log("t");
    // console.log("e");
    // console.log("s");
    // console.log("h");
}

////console.log(sayMyName);
sayMyName(); 
////sayMyName is only the reference of funtion means where function resides
////sayMyName() this is the statement that executes the function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
addTwoNumbers(); //// output of this fuction is NaN because here I didn't pass the arguments

addTwoNumbers(2, 5);
addTwoNumbers(3, "6");

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
    //return number1+number2;  //not rechable code
}

const result = addTwoNumbers(3,9);

console.log("Result = ", result);


function logInUserMessage(userName){
    // if(userName === undefined){
    if(!userName){        //we know that empty string, udefind is considered as false;
        console.log("Please enter a user name");
        return;
    }
    return `${userName}, just logged in`;
}

//console.log(logInUserMessage("Hitesh"));
console.log(logInUserMessage());

function calculateCartPrice1(num1){
    return num1;
}
console.log(calculateCartPrice1(200, 400, 500)); // this funtion takes only one according to parameter

function calculateCartPrice2(...num1){ // triple dots are known as rest operator; //this is same like var-args in java
    return num1;
}
console.log(calculateCartPrice2(200, 400, 500)); // this funtion takes all value in an array;

function calculateCartPric4(val1, val2, ...num1){ // triple dots are known as rest operator; //this is same like var-args in java
    console.log(`${val1} and ${val2}`);
    return num1;
}
console.log(calculateCartPric4(200, 400, 500,2000)); // this funtion takes only one according to parameter



const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user);
handleObject({
    username: "sam",
    price: 399
});


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray);
console.log(returnSecondValue([200, 400, 500, 1000]));