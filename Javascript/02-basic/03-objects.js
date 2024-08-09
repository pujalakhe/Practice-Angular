//singleton
//++++Object Literals+++++++
//objects defined by literals dont make singleton
//here keys are name,age,address,email
const mySym = Symbol('key1');
const jsUser = {
    name : 'Puja',
    "fullname" : "Puja Lakhe",
    age : 20,
    [mySym] : "mykey1",//adding symbol as key
    address : "BKT",
    email : 'puja@gmail.com',
    isloggedIn : false,
    lastLoginDays : ['Monday', 'Saturday'],
}
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["fullname"]);
//console.log(jsUser."fullname");//this is incorrect
//console.log(typeof jsUser.mySym);//type undefined
//console.log(jsUser[mySym]);
//console.log(typeof jsUser[mySym]);//type string



//Object.freeze(jsUser)//locking the objects so no one can change the value
// jsUser.email = 'sfdgjhsdfjg'
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting())
//console.log(jsUser.greeting());
jsUser.greetingTo= function(){
    console.log(`hello js user, ${/*jsUser or this can be used*/this.name}`);
}
console.log(jsUser.greetingTo())

//++++++++Object created in JS by using Object Consturctor+++++++

