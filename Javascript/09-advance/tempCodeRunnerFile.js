// //creating promise 
// const promiseOne = new Promise(function (resolve, reject) {
//     //do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// })
// //consuming promise
// promiseOne.then(function(){
//     console.log('promise Consumed');
// })


// new Promise (function(resolve, reject){
//     setTimeout(function (){
//         console.log("Async task  2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise (function (resolve, reject){
//     setTimeout(function (){
//         resolve({userName : 'chai',email:'chai@example.com'})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise (function (resolve,reject){
//     setTimeout( function (){
//         let error = true // or fasle;
//         if (!error) {   
//             resolve({userName:"puja", password:"784"});
//         }
//         else 
//         {
//             reject("something went wrong");
//         }
//     },2000)
// })
// promiseFour.then( (user) => {
//     console.log(user);
//     return user.userName;
// }).then( (userName)=> {
//     console.log(userName);
// }).catch( function (error)
// {
//     console.log(error);
// }).finally( () => console.log("Finally , the promise is either resove or rejected"));

// const promiseFive = new Promise ( function (resolve,reject) {
//     setTimeout(function (){
//         let error = true;
//         if(!error)
//         {
//             resolve ({userName:"puja", email : "fdhj@gmail.com"})
//         }
//         else
//         {
//             reject("error JS went wrong");
//         }
//     },1000);
// });
// async function consumePromiseFIve (){
//     try {
//         const response = await promiseFive ;
//         console.log(response);
//     } 
//     catch (error) {
//         console.log(error);
//     }
    
// }
// consumePromiseFIve();

// async function  getAllUsers()
// {
//     try {
//         const response = await fetch("http://jsonplaceholder.typicode.com/users");
//         //console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
    
// }
// getAllUsers();


