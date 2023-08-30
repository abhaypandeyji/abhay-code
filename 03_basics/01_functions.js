
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




