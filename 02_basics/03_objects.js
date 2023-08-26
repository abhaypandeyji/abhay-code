// singleton (when we create object by constructor)

// objects literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "hitesh Choudhary",
    [mySym] : "myKey1",      //this is the syntax to declare the Symbol type if you simply declare as 
    age: "jaipur",           //other variable then you then this is treated as String 
    location: "jaipur",      //this is an interview question
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof mySym);

//console.log(JsUser[mySym]);
////this is the syntax for accessing the symbol variable; 


// JsUser.email = "hiteshchoudhary@chatgpt";
// console.log(JsUser.email);

//how to lock the objects in javaScript so that no one can change the value

//Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";  //this statement is not able to change the  value of email 
console.log(JsUser.email);              //because object has been freezed already

JsUser.greeting = function(){
    console.log("Jai shree krishna");
}

JsUser.greetingTwo = function(){
    console.log(`Jai shree krishna, ${this.name}`);
} 

console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());


