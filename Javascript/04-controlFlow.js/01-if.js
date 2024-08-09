//if

/* const temp =59;
if(temp === 41)
{
    console.log("temp less than 50");
}
else
{
    console.log("temp greater than 50 ");
}
console.log("execute"); */

/* const score  = 200;
if(score >100)
{
    let power = "fly"
    console.log(`User power :${power}`);
}
console.log(`User power :${power}`); */

const blc = 1000;
//shorthand notation
//if(blc > 500) console.log("test");
/* 
if(blc < 500)
{
    console.log("less than");
}
else if (blc < 750)
{
    console.log("less then 750");
}
else
{
    console.log("less than 1200");
} */

/* if(2 === "2")
{
    console.log("Executed")
} */
//<, >, <=, >=, ==, !=, ===, !==
//=== check type also
//== dont check datatype treat all as same

const userIsLoggedIn = true;
const debitCard = true;
const loggedINFromEmail = true;
const loggedINFromGoogle = false;
if(userIsLoggedIn && debitCard)
{
    console.log("allow to buy course");
}
if(loggedINFromEmail || loggedINFromGoogle)
{
    console.log("user Logged in")
}