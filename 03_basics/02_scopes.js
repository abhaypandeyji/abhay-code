//var c = 300;
//always avoid to use var because it doesn't follow scope rule;

let a = 900;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    //console.log(`Inner block a's value ${a}`);
}
//console.log(`Outer block a's value ${a}`);

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube";
        console.log(username);
    
    }
    //console.log(website);

    two();
}

one();

if(true){
    const username = "krishna";
    if(username === "krishna"){
        const website = " youtube";
        console.log(username + website);
        
    }
    //console.log(website);
}

//console.log(username);

/**************************** Interesting **************************** */


console.log(addone(4));  //but this statement not throws error;


function addone(num){
    return num + 1;

}

console.log(addTow(5));  //ERROR   //here this statement throws error;

const addTow  = function(num){
    return num + 2;
}

console.log(addTow(5));  





