//array can take any data
const btsMembers = ["jk", "v", "jm"];
const svtMembers = ["jeonghan", "joshua","woonwoo"];
console.log(btsMembers);
console.log(svtMembers);
btsMembers.push(svtMembers);
// console.log(btsMembers);
// console.log(btsMembers[3][0])

const allIdols = btsMembers.concat(svtMembers)
//console.log(btsMembers);
//console.log(allIdols);

const allNewIdols = [...btsMembers, ...svtMembers];
//console.log(allNewIdols);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAontherArray = anotherArray.flat(Infinity);
//console.log(realAontherArray);

/* console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}));//iintresting case */

let score1 = 100;
let  score2 = 300;
let score3 = 400;
console.log(Array.of(score1, score2, score3));

 