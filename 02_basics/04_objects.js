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

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "b", 4: "b"};
const obj3 = {5: "c", 6: "b"};

//const obj4 = {obj1, obj2};
//console.log(obj4);

// const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2};   //spread function to combine two or more object togethe;
console.log(obj5);
