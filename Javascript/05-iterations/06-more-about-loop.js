let myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//let newNums = myNums.map ( (num) => num+10);
// let newNums=[];
// myNums.forEach( (num) => newNums.push(num+10));
// console.log(newNums);


//chaining method
let newNums = myNums
                .map( (num) => num *10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums);