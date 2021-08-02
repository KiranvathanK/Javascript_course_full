const uid = "abc1234";
//hear const used if once assainged we can't able to replace becuse its constant

var fullName = "kiran vathan";
var email = "kiran@gmail.com";
var courseCount = 5;
var password = "1234";
var confirmPassword = "1234";

//for signup wt all we need just hardcoded above

//for alert like popbox
console.log(email);

//take input values from users
//fullName = prompt("enter fullName");

//for display 
console.log(uid);
console.log(fullName);
console.log(email);
//insted of doing like this hard code we use a backtek shown below

console.log(`
    user Id : ${uid}
    user Name is : ${fullName}
    Email : ${email}
    password : ${password}
`);
//insted of console everything we have to use backtek and write like above
//its also called "Interpolation"  