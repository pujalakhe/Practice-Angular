//this is used to refer content current AudioContext
const user = {
    username : "hitesh",
    price :999,
    welcomeMessage : function(){
        //console.log(`${this.username}, welcome to this website`)
        //console.log(this);
    } 
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//console.log(this);

// function chai ()
// {
//     let username = "puja"
//     console.log(this.username);
// }
// chai ()

//+++++++++Arrow function++++++++
//syntax ()=>{}
// const chai =function chai ()
// {
//     let username = "puja"
//     console.log(this.username);
// }

const chai = () =>
{
    let username = "puja"
    console.log(this);
}
//chai ()
//explicit reutn use return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

//Implicit return
//const addTwo = (num1, num2) =>  num1 + num2
//const addTwo = (num1, num2) =>  (num1 + num2)
//accesing obj using arrow function
const addTwo = (num1, num2) => ({username : "hitesh"} )

const myarray = [1,2,3,5,]
//myarray.forEach(function () {})
//myarray.forEach (()=>)
console.log(addTwo(3,4))