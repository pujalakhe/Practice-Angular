let myName = "hitesh     ";
let channel = "chai      ";
//console.log(myName.truelength())

let myHeros = ['thor','spiderman'];
let heroPower = {
    thor:"hammer",
    spiderman : "sling",

    getSpiderPower : function (){
        console.log(`Spidey power is ${this.spiderman}`);
    } 
}

Object.prototype.hitesh = function (){
    console.log("hitesh is present in all objects");
}

Array.prototype.hyehitesh = function(){
    console.log("hitesh says hello");
}
//heroPower.hitesh();
//myHeros.hitesh();
//myHeros.hyehitesh();
//heroPower.hyehitesh();


//####Inheritance#####
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


//###modern  syntax for inheritance#####
Object.setPrototypeOf(TeachingSupport,Teacher);
let anotherUserName = "chaiaurcode    ";
String.prototype.truelength = function (){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`);
}
anotherUserName.truelength();
"hitesh".truelength();
"icetea".truelength();