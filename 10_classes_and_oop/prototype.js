let myName = "hitesh        ";

console.log(myName.length);

console.log(myName.trim().length); //this is for one who is of low IQ level;

let myHeros = ['krishna', 'govind', 'gopal', 'madhav', 'supremeperson'];


let heroPower = {
    krishna: "flute",
    govind: "Conch",
    madhav: "mace",
    supremeperson: "sudarshanchakra",
    completman: "padma-lotus",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.krishna}`);
    }
}

Object.prototype.hites = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Histesh says hello`);

}

//kyonki object sabka parent hai Array ka ,String ka ,funtion to object ka properties sbko 
//milega but Array, String, funtion ye sare bhai hain to inka properties khali inhi ko milega
//dusra bhai ek bhai ka property access nhi kar payega,to js me bhi same baat apply hoti hai 
//for example Array ka prototype funtion property ka access keval array k pass hi hai;

heroPower.hites();
myHeros.hites();
myHeros.heyHitesh();
// heroPower.heyHitesh();


//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,             //Inheritance;
    __proto__: TeachingSupport  //TASupport extends the properties of TeachingSupport
}
//______________________________or you can inherits using this method also____________________
Teacher.__proto__ = User; //here Teacher inherits the User;

//__________________________________Modern Method______________________________________________________________________

Object.setPrototypeOf(TeachingSupport, Teacher);
//Here TeachingSupport is Child class and Teacher is class that extended means parent class; 


let anotherUsername = "chaiAurCode";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Jai shree krishna bolo jai radhe    ".trueLength();



