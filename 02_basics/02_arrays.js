const marvel_heros = ["krishna", "thor", "Ironman"];
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros.length);  //length = 4;

const allHeros =  marvel_heros.concat(dc_heros);
console.log(allHeros);