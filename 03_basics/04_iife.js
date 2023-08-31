//iife means immediate invoked funtion expression(IIFE);
//what is iife:- iife is used to invoke the method immediatly moreover iife is also used to protect
//the function from global variable, kabhi kabhi hum nhi chahte ki koi global variable function k ander
//polute machaye isliye hum iife ka use krte hai, jab hum iife use karte hain to (ye) alag ek block ban 
//jata hai jo completely alag hi block hota hai;

//this is not used for onlu call the method immediatly; instead along with this it is basically used to 
//remove the polution of global variables and declarations;


(function chai(){
    //this is known as named iife;
    console.log(`DB CONNECTED`);
})();
//please be careful when you have two iife one after another, as we know that javaScript automatically
//complete the semicolon BUT WHEN YOU HAVE TWO IIFE ONE AFTER ANOTHER THEN IN THAT CASE YOU MUST USE
//SEMICOLON AFTER THE FIRST IIFE OTHERWISE IT GIVES COMPILE TIME ERROR BECAUSE COMPILER IS NOT ABLE TO 
//UNDERSTAND THAT WHERE CONTEXT ENDED;


( () => {
    //this is known as unname iife or Anonymous iife;
    console.log(`ONE MORE DB CONNECTED`);
})();


(function chai(){
    //this is known as named iife;
    console.log(`DB CONNECTED`);
})();

//here we can se that name of the funtion is same and no any compiletime error are there
//how is it possible, it is possible because (ye) completely alag block hai isiliye to hum ise bolte hain
//ki it is also use to remove the global declaration;

//HOW TO PASS ARGUMENT IN IIFE
let name  = "krishna";
(function chai(name){
    //this is known as named iife;
    console.log(`${name}'s DB CONNECTED`);
})(name);

(function chai(name){
    //this is known as named iife;
    console.log(`${name}'s DB CONNECTED`);
})('krishna');

let teacherName = "Hitesh";

( (name) => {
    //this is known as unname iife or Anonymous iife;
    console.log(`Our javaScript teacher name is ${name}`);
})(teacherName);



















