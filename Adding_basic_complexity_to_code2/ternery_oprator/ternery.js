//show user logout if he authenticated or LoggedIn
//otherwise show him login

var authenticated;

authenticated = false;

//normalway

// if(authenticated){
//     console.log("logout")
// }else{
//     console.log("signIn");
// }

//the same way use the ternery oprator
//below is ternary oprator its works same as above code 

authenticated ?  console.log("logout") : console.log("signIn");

//for more expression and oprator search on google its shows document refr that.... 