const userEmail = []
if(userEmail)
{
    //console.log("Email received");
}
else {
    //console.log("email not received");
}

//falsey values are
//   :false, 0, -0, bigint 0n, "", null, undefined, NaN

//truthy values are
//    :"0", "false", " ", [], {}, function(){}

if(userEmail.length == 0)
{
    //console.log("araay is empty")
}
const emptyObj = {}
    if(Object.keys(emptyObj).length === 0)
    {
        //console.log("Obj is empty");
    }
/* false == 0
    ->true
    false == ''
    ->true
    0 == ''
    ->true
*/

//Nullish coalescing Operator (??): null undefined
let val1;
// //val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
//console.log(val1);


//Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
//iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");