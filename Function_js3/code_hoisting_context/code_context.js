function hello(){
    console.log("its my name")
}

hello();//hear global context scan everything and excute function

//even we call first function and after written the function block its excute function
hello();

function hello(){
    console.log("its my name")//no error its shows output 
}



//There are two types of CONTEXT
//Global Context
//Excute Context

//global context scan each thing if its correct and any where call the function its works
//excute Context excute and go away its store like stack first its ccome excute and go away 

//Excute context contains
//variable objects (below var declaration we call its give output if above var is called function or somthing else gives Undefined output)
//scope chain
//this 

//There are two rules in Excution context 
//Functions declarations are scanned and made available 
//Variable declarations are scanned and made undefined 

tipper("80")

function tipper(a) {
    var bill = parseInt(a);
    console.log( bill +5);//no error bcz global Context scanned and excute
}


function bigTipper(a) {
    var bill = parseInt(a);
    console.log( bill +5);//no error bcz global Context scanned and excute properly
}
bigTipper("100")

var bigTipper = function(a){
    var bill = parseInt(a);
    console.log( bill +5);//hear we get a undefined bcz its treat as oridinary variable so hoisting comes hear
}

bigTipper("101")//if var assignes to function the calling must be on after var declarition

//more examples for excute context

var fullName = "kiran";
console.log( fullName);
//hear no error if we called before intialized the var console then its undefined comes back

console.log( fullName);
var fullName = "kiran";

function hai(a){
    var name = parsInt(a);
    console.log(name + 12);
}

hai("12");//its wont take care about the above var and all its only focus on the function

console.log(fullName);//hear calling the above var value so its excute

// becuse earlier we know excution context excute line and go away so its work excute hai() function go away
// and next excute the console 






