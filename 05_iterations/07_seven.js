const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map( (num) => num + 10);
console.log(newNums);

const newNumbr = myNumbers.map( (num) =>{
    return num + 10;
});
console.log(newNumbr);

const newNumbers = [];
myNumbers.forEach( (num) =>{
    newNumbers.push(num + 10);
})
console.log(newNumbers);

const newValue = myNumbers
                 .map( (num) => num * 10 )
                 .map( (num) => num + 1)
                 .filter( (num) => num >=40);
// when we apply the some method output of another method then that thing is known as
//chaining;

console.log(newValue);


