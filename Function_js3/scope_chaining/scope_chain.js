var fullName = "kiran";//its doesnt use belove var values 

console.log(fullName);


function first(){
    var first = "firstName";//if hear dont have var then its use above var value
    console.log(first);
    secound();

    function secound(){
        console.log(first)//its use the above var value
    }

}
first(); 

//hear child ask icecream to father and father can ask their parents
//but grand parents wont ask to their childs and grand childs ...

//like this scope chain works

