/*#prinitive datatypesthey are called by values
-7 types:String, Number , Boolean, NUll, Undefined, Symbol, BigInt

//string 
const name = "puja"
console.log(typeof name);

//number
const number =123
console.log(typeof number);

//boolean
const isLoggedIN = false//type is boolean
console.log(typeof isLoggedIN);

//null
const outsideTemp = null//type is object
console.log(typeof outsideTemp);

//undefined
let userEmail;//type is undefined
console.log(typeof userEmail);


is JS dynamic or static type language??

exapmle of symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId === id);//false

example of bigint
const bigNUmber = 23124354657890n
console.log(typeof bigNUmber);//bigint


#Reference Datatype(Non-Primitive)
Types: Arrays, Objects, Functions

Examples of array
const btsMember = ["jungkook","from busan","born in 1997"];
console.log(btsMember);

example of object
const std =//type is object
{
    name :"puja lakhe",
    age : 22,
    address : "bhaktapur",
};
console.log(typeof std);


Example of function
const myFunction = function()
{
    console.log("hello world");//type function object
}
console.log(myFunction);

link to typescript
// https://262.ecma-international.org/5.1/#sec-11.4.3

stack uses primitive datatypes.Stack uses copy of the original data
exapmle
let myYoutubeName = "pujalakhe"
let anotherNAme = myYoutubeName
anotherNAme = "lakhepuja"
console.log(myYoutubeName);
console.log(anotherNAme);


heap uses non-primitive datatyes.Heaps gives original values of the reference
Example
let userOne ={
    email : "user@google.com",
    country : "Nepal"

}
let userTwo = userOne;
userTwo.email = "pujalakhe@gmail.com"
console.log(userOne);
console.log(userTwo);
*/







