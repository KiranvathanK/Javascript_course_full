//create an application with following roles:
//admin
//subadmin
//testprep
//users

var user = "abc";

switch (user) {
    case "admin":
        console.log("admin");
      break;
    case "subadmin":
        console.log("subadmin");
      break;
    case "testprep":
        console.log("testprep");
      break;
    case "users":
        console.log("users");
      break;

    default:
    console.log("no user")
    break;

}

//sometimes based on user requirments used this switch case we use