const marvel_heros = ["krishna", "thor", "Ironman"];
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // print the array of array element
console.log(marvel_heros.length);  //length = 4;

const allHeros =  marvel_heros.concat(dc_heros); //combines two or more array and return a new array

console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
//spread the two arrays into one array (droping the glass of glass);
//console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_arr = another_array.flat(Infinity);
console.log(real_another_arr);


console.log(Array.isArray("Hitesh"));
console.log(Array.from({name: "Hitesh"}));   //interesting;

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

const arr = Array.of(score1, score2, score3);
const newArr = marvel_heros.concat(dc_heros,arr);
console.log(newArr);

