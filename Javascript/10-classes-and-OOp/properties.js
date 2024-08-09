class user {
    constructor(username){
        this.username=username;

    }

    logme(){
        console.log(`this user ${this.username} has logged in.`);
    }
     static createID(){
        return `123`;
    }
}
const puja = new user ("pujalakhe");
//console.log(puja.createID());

class teacher extends user {
    constructor(username,email){
        super(username);
        this.email = email;
    }
}
const iphone = new teacher("iphone","i@phone.com");
iphone.logme();
//console.log(iphone.createID());