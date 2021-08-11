console.log(this)//its shows output just {} in node server 
//if above code run in browser console then its show Window along with other properties 


// var play = "ball";
// function sayPlayer(){
//     var name = "kiran";
//     console.log(this);
// }

// sayPlayer();

//its shows some line of code to get to know we have to c 2nd part of this keyword session
//above function code paste in the console its shows the Window and other some properties only

var sayPlayer = function(){
    var name = "kiran";
    console.log(this);
}

sayPlayer();

//its too show some code lets understand on 2nd part of this keyword
//if its paste on browser console its shows window and other properties