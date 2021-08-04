//Roles
//admin access all
//subadmin acess only create and delete roles
//testprep acess only create and delete tests
//user consume content only
//other trail 

//use getUserRole(name , role)

function getUserRole(name, role){
    switch (role){
        case "admin":
            return `${name} all access`
            break;
        case "subadmin":
            return `${name} create delete roles `
            break;
        case "testprep":
            return `${name} create and delete tests`
            break;
        case "user":
            return `${name} consume content only`
            break;
           
        default:
            return `${name} its trail vesrion`
                break;
    }
}

getUserRole("kiran","admin");//giving name and role 

console.log(getUserRole("kiran","admin"));//printing values

var result = getUserRole("babe","subadmin"); //assigning values to variables and print that

console.log(result);


//another type we wright function to
//hear we are assigning function into variables examples shown below

var getUserRole = function (name, role){
    switch (role){
        case "admin":
            return `${name} all access`
            break; 
        case "subadmin":
            return `${name} create delete roles `
            break;
        case "testprep":
            return `${name} create and delete tests`
            break;
        case "user":
            return `${name} consume content only`
            break;
           
        default:
            return `${name} its trail vesrion`
                break;
    }
}

getUserRole("kiran","admin");//giving name and role 

console.log(getUserRole("kiran","admin"));//printing values

var result = getUserRole("babe","subadmin"); //assigning values to variables and print that

console.log(result);