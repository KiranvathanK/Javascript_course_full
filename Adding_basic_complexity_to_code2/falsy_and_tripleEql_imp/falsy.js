//falsy values
//undefined
//null
//0
//"" empty string
//NaN not a number


var user = "2";

if(user){
    console.log("yes its working")
}
//its shows no out put bcz the if condition is true then only we get output
//but hear null is falsy value so if any falsy value added is took as false 
//so if checked to undefined null 0 "" NaN these are falsy values

//=== == diffrence


if(2 == user){
    console.log("yes we are working");//hear we use == its check only values if values is same then its 
    //excute this block
}

if( 2 === user){
    console.log("yes working");//hear we use === its check both DATA TYPE and VALUES if both get match then its 
    //its true and excute the block
}