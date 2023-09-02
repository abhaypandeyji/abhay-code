const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce( function ( acc, currval){
    console.log(`acc = ${acc} and currval = ${currval}`);
    return acc + currval;
}, 2);
//if here you will not put(2) any initial value for acc then by default it takes zero;

const mySum = myNums.reduce( (acc, curr) => acc+curr, 0);

console.log(mySum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 8999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "DataScience",
        price: 4999
    },
    {
        itemName: "java",
        price: 1999
    },
    {
        itemName: "DSA",
        price: 3999
    }

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(`Price to pay for all the courses = ${priceToPay}`);
