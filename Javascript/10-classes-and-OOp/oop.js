//about object literal
const user = {
    username :"puja",
    loginCOunt : 8,
    signedIn : true,

    getUserDetails: function ()
    {
        //console.log("got user details");  
        // console.log(`Username:${this.username}`)  ;
        // console.log(this);   
    }
}

//console.log(user.getUserDetails());
//console.log(this);

//about constructor function :- new is a constructor function

function users ( username,loginCOunt, isLoggedIN)
{
    this.username = username ;
    this.loginCOunt = loginCOunt;
    this.isLoggedIN = isLoggedIN;
    this.greeting = function ()
    {
        console.log(`welcome ${this.username}`);
    }
    //return this;
}

const userOne = new users("hitesh",12,true);
const userTwo = new  users("chainAurCode",11,false);
console.log(userOne.constructor);
//console.log(userTwo);

