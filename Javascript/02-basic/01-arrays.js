//array
const array = [9, 8, 7, 6, 4]
//console.log(array[0]);
let myEducation =['KEC', 'Khwopa', 'BMC']
//console.log(myEducation);

const myArr = new Array(8, 7, 6,5,4,3 )
//console.log(myArr[1]);

//Array Methods
//myArr.push(2)
//myArr.push(3)
//myArr.pop()

//myArr.unshift(5)
//myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(6));

const newArr = myArr.join()//join converts it into string
//console.log(myArr);
//console.log(newArr);

//slice,splice
console.log("A" , myArr);//original array
const myn1 = myArr.slice(1,3)//start from index 1 upto index 3(but don't include) and original array is not manipulated in slice
console.log("slice:",myn1);//array that are sliced slicing
console.log("B", myArr);//orginal array

const myn2 = myArr.splice(1,3)
console.log("C", myArr);//original array is manipulated in splice
console.log("splice:",myn2);// elements that are spliced splicing