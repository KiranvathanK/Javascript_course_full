//user is only allowed to purchse when he is:
//LoggedIn
//email varified
//card Info
//if any one miss above condition dont sallow to purchase

isLoggedIn = true;
emailVarified = true;
cardInfo = true;

// if (isLoggedIn){
//     console.log("loggedin");
//     if(emailVarified){
//         console.log("email is varified"); 
//         if(cardInfo){
//             console.log("card Added");
//         }
//     }
// }
 
//its check all conditions one by one if login emailvarified,cardInfo then all true we have to allow to purchase

//the above code is little hard so insted of that we user another type

if (isLoggedIn && emailVarified && cardInfo){
    console.log("allow to purchase");
}else{
    console.log("do not allow to purchase");
}

//&& we used all condition must be a true if one is wrong entire block doesn't get excute
//|| if we used or hear any one condition satisfied its excute