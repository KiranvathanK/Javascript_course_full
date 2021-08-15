var user = {
    firstName:"kiran",
    lastName:"k",
    age:25,
    email: "kiran@gmail.com",
    phoneNumber:9738879904,
    isLoggedIn:true,
    courseList:[],
    getCourse: function (courses) {
        this.courseList.push(courses);
    },
    count: function (){
        return `${this.firstName} has courses ${this.courseList.length}`
    }


}

console.log(user.count());//calling the object method
user.getCourse("react");
user.getCourse("reactjs");//hear we are entering a courses names
console.log(user.count());



//assignment get info of user
var user = {
    firstName:"kiran",
    lastName:"k",
    age:25,
    email: "kiran@gmail.com",
    phoneNumber:9738879904,
    isLoggedIn:true,
    courseList:[],
    getCourse: function (courses) {
        this.courseList.push(courses);
    },
    count: function (){
        return `${this.firstName} has courses ${this.courseList.length}`
    },
    infoUser:function(){
        return `firstname is ${this.firstName} and last name is ${this.lastName}
        and age ${this.age} email ${this.email} phone is ${this.phoneNumber} AND subscribes the total course
        ${this.courseList.length}`
    }

}

user.getCourse("react");
user.getCourse("angular")
console.log(user.count());
console.log(user.infoUser());