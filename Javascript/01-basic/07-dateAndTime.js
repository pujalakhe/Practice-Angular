//dates .DAte is and objects
let myDAte =  new Date()
//console.log(myDAte); //ans 2024-01-25T10:41:32.166Z
//console.log(myDAte.toString());//ans Thu Jan 25 2024 16:27:16 GMT+0545 (Nepal Time)
/* console.log(myDAte.toDateString());//ans Thu Jan 25 2024
console.log(myDAte.toISOString()); //ans 
 */

//let myCreatedDate = new Date(2023,0,23)//jan=0
//console.log(myCreatedDate.toDateString());

//let myCreatedDate = new Date(2023,0,23,5,3)//jan=0
//console.log(myCreatedDate.toLocaleString());1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("2023-01-12")//jan=1
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());// values in answer are in milliseconds
//console.log(Math.floor(Date.now()/1000));

/* let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()) */;

//`${newDate.getDay()} and the time is `

newDate.toLocaleString('default', {
    weekday : "long",
})
