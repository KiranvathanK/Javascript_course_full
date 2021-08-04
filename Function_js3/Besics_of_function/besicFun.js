//function how to create in js


function hello(){
    console.log("hello its my name kiran");
}

hello();
hello();  //hear we call the function  to get the output bcz we console inside in the function

//hello();  calling the function
//hello; refering a function

//there we are hard coded my name but we r leave to enter name r give a name  

function hello(name){
    console.log("hello its my name",name);
}

hello(); //output will be undefined bcz we ddnt give a value
hello("karan")// output is hello its my name karnataka(hear we gave a name)

// another syntax giving value by using interpolation

function hello(name){
    console.log(`hello its my name",${name} k`);//hear we using interpolation inside the backtek
}

hello("karan")// output is hello its my name karan(hear we gave a name)

//function innside we call a return statement

function hai(){
    return "hai its me kiran";
}

//hear we return value but it wont show bcz we ddnt asign value to variable and also not console so..

var mine = hai   //hear we are reffering funvtion hai 