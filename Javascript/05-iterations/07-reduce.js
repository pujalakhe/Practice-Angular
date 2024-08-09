const myNums = [1,2,3]
/* const total = myNums.reduce( function (accumulator ,currentvalue) {
    console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
    return accumulator + currentvalue
}, 0) 
console.log(total);
*/

//using arrow function
const total = myNums.reduce(  (accumulator,currentvalue) => (accumulator + currentvalue),0)
//console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "Mob dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

/* let priceToPay = shoppingCart.reduce( (acc,item) => (acc + item.price),0)
console.log(`total price is :${priceToPay}`)*/

let priceToPay = shoppingCart.reduce( function(acc,item) {
    console.log(`accumulator: ${acc} and currentvalue: ${item.price}`);
    return acc + item.price;
},0)
console.log(`total price is :${priceToPay}`)