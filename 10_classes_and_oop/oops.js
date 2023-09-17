//console.log("krishna");

const user = {
    username: "Krishna",
    loginCount: 1098,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;   

    //return this; statement is not required it is executed implicitely but u can 
    //write it also.
}
// const userOne = User("hitesh", 12, true);
// const userTwo = User("chaiAurCode", 11, false);

// console.log(userOne);
// console.log(userTwo);

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chaiAurCode", 11, false);

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);  //constructor property gives the information about itself;
console.log(userTwo.constructor);  //

console.log(userOne.username);
userOne.greeting();


//____________________________instanceOf Operator____________________________________
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true












