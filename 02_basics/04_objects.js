//const tinderUser = new Object();
const tinderUser = {};
////there is no internal difference between both the declarations of the objects 
////only difference is that above declaration is SingleTon and second declaration are the Non Singleton
////but remaining stories are same;

tinderUser.id = "123abc";
tinderUser.name = "Krishna";
tinderUser.isLoggedIn = false;


//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);  //only hint use of ?

const obj1 = {1: "a", } 