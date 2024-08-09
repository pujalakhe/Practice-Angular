//++++++JavaScript Execution Context++++++
//Types of Execution Context(3 types)
//1.GLobal Execution Context
//2.Function Execution Contect
//3.Eval Execution Context

//2 phases of execution
//1.Memory Creation Phase
//2.Execution Phase

/* function one()
{
    console.log("one")
    two()
}
function two()
{
    console.log("two")
    three()
}
function three()
{
    console.log("three")
} */

/* 
function one()
{
    console.log("one")
    two()
}
function two()
{
    console.log("two")
    three()
}
function three()
{
    console.log("three")
} */

// one()
// two()
// three()


let val1 = 10;
let val2 = 5;
function addNum(num1, num2)
{
    let total = num1 + num2 ;
    return total;
}
let result1 = console.log(addNum(val1, val2));
let result2 = console.log(addNum(10,2));