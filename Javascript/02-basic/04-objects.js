//++++++++Object created in JS by using Object Consturctor+++++++.they made singelton
//const tinderUser = {}//singelton object
const tinderUser = new Object()//singelton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);
//****nested objects******
const regularUser ={
    email : "sth@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Puja",
            lastname: "Lakhe"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={ 
    1: "a",
    2:"b",
}
const obj2 ={ 
    3: "c",
    4:"d",
}
//const obj3 ={ obj1, obj3}
//const obj3 = Object.assign( {}, obj1, obj2);//target AND source
const obj3 ={...obj1, ...obj2}//mostly used
//console.log(obj3);

const user = [
    {
        id:1,
        email:"abc@gmail.com"
    },
    {

    },
    {

    },
    {

    },
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    courseName : 'js',
    coursePrice : 120,
    instructor : "hitesh"
}
//course.instructor
const {instructor} =course
//console.log(instructor);
const {instructor:courseInstructor} =course// instructor key name  changed into courseInstructor key
console.log(courseInstructor);

/*
//example of JASON
 {
    "name":"puja",
    "courseName":"JS",
    "coursePrice":"free"
} */
//API in array format
/* [
    {},
    {},
    {}
] */