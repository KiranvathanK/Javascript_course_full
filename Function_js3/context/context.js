//context is behind the scence run in javasript its a global context

function hello(){
    console.log("hai i m kiran");
}

hello();//hear excute the normal way if cut and paste this at top then its works without error

//example

hello();

function hello(){
    console.log("hai i m kiran");
}
//same as above excute

var myname = "kiran"
if (myname == myname){
    console.log("true")
}

//get output 

//but if we add some context what are behind the scenes...
if (myname == window.myname){
    console.log("true")//get error wont get output
}

//the same code run is console we wont get error get output correctly
//if its uses in node or some other platform we get error v=bcz its a javascript behind scene works