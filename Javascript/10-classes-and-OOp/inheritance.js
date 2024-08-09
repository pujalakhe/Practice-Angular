class user {
    constructor (username){
        this.username= username
    }
//logme() is a self made method
    logMe(){
        console.log(`username is ${this.username}`);
    }
}
class teacher extends user{
    constructor (username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
//addCourse() is a self made method
    addCouse(){
        console.log(`new couse was added by ${this.username}`)
    }
}
const puja = new teacher("puja","puja@teacher.com","123");
puja.addCouse()
puja.logMe()

const taehyung = new user("taehyung");
 
console.log(puja === taehyung);//excepted Output:fasle
console.log(puja === teacher);//excepted Output:fasle
console.log(teacher instanceof user);//excepted Output:fale
console.log(puja instanceof teacher);//excepted Output:true
console.log(puja instanceof user);//excepted Output:fale



