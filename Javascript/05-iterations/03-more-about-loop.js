/* ["", "", ""]
[{}, {}, {},] */

//for of
/* for (const iterator of object) {
    
} */
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}
const location = ["bkt", "ktm", "lkt"]
for (const place of location) {
    //console.log(place);
}
const greeting = "Hello World"
for (const greet of greeting) {
   // console.log(greet);
}
//map :asre self iteratable
const map = new Map()
map.set('IN', "India")
map.set('NP', "Nepal")
map.set('KR', "Korea")
map.set('FR', "France")
//console.log(map);

/* for (const key of map) {
    console.log(key);
} */
for (const [key, value] of map) {
    //console.log(key, ':-' , value);
}
//for using objects in loop we use forinloop
const myObject = {
    game1: 'NFS',
    game2 :'Spiderman',
    game3 : 'Hill Climb Racing'
}
for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key]);
    //console.log(` this ${key} represents ${myObject[key]} game`)
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    //console.log(programming[key]);
}

//map using forin loop
/* const maps = new Map()
map.set('IN', "India")
map.set('NP', "Nepal")
map.set('KR', "Korea")
map.set('FR', "France")
for (const key in maps) {
   console.log(key);
} */


