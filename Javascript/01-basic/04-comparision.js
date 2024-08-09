/*console.log(null > 0);// 0 >0
console.log(null == 0);//empty == 0
console.log(null >=0);// 0>=0
/*the reason is that an equality check == and comparisons > <>= <= work differently.
comparisons convert null to a number,treating it as 0. that's why (3) null>= 0 is true and (1) null >0 is false*/

//undefined
/*console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);*/

//===
console.log("2"===2);//data type is also checked as string is not equal to number
console.log("2"==2);// this "2" is considered as number.no datatypes are checked 