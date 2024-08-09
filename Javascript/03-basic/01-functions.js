function sayMyname()
{
    console.log("P");
    console.log("U");
    console.log("J");
    console.log("A");
}
//sayMyname()
/* function addTwoNumbers(number1, number2)
{
    console.log(number1+number2)
}
const result = addTwoNumbers(3, 4);
console.log("result:",result); //result: undefined*/

function addTwoNumbers(number1, number2)
{
    //let result = number1+number2;
    //return result;
    return  number1 + number2;
}
const result = addTwoNumbers(3, 4);
//console.log("result:",result); 
function logInUserMessage(username ="Sam")
{
    /* if(username === undefined)
    {
        console.log("Enter the username");
        return
    } */
    if(!username )
    {
        console.log("Enter the username");
        return
    }
    return `${username} just logged in.`
}
//console.log(logInUserMessage("puja"));
//console.log(logInUserMessage());

function calculateCartPrice(val1, val2, ...num1)
{
    return num1;
}
//console.log(calculateCartPrice(200,400,500))

const user={
    username :"hitesh",
    price: 199
}
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user);
handleObject({
    username:"sam",
    price : 399
})

const arr =[200, 400, 100, 600]
function returnSecondValue(getArray)
{
    return getArray[2]
}
//console.log(returnSecondValue(arr));
console.log(returnSecondValue([200,400,500,10000]))