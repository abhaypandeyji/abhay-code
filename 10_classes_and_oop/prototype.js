let myName = "hitesh        ";

console.log(myName.length);

console.log(myName.trim().length); //this is for one who is of low IQ level;

let myHeros = ['krishna', 'govind', 'gopal', 'madhav', 'supremeperson'];


let heroPower = {
    krishna: "flute",
    govind: "Conch",
    madhav: "mace",
    supremeperson: "sudarshanchakra",

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
