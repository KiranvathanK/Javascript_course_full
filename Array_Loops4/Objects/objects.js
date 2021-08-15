var user = {
    firstName:"kiran",
    lastName:"k",
    age:25,
    email: "kiran@gmail.com",
    phoneNumber:9738879904,
    isLoggedIn:true

}
console.table(user);

console.log(user);
//user is a object
//above output is
// {
//     firstName: 'kiran',
//     lastName: 'k',
//     age: 25,
//     email: 'kiran@gmail.com',
//     phoneNumber: 9738879904,
//     isLoggedIn: true
//   }

//for perticular object properties syntax is 

console.log(user.firstName);
//hear perticualrly firstname only in object
//another type of pointing proprerties
console.log(user["lastName"]);