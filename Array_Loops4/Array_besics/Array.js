//intailizing array
var country = ["India","USA","America","Canada",];//old type array declaration

var states = new Array ("karnataka","goa","rajastan");//new type array declaration with oops concept
console.log(states);//shows all states

console.log(states[0]);
//hear its shows 1st index of array values(the array value stored in index start from 0)
//output "karanataka"

console.log(states.length);
//this shows the resule of array length wt we count number like only the
//out put is 3 because 3 states there 

//replace a values in array 
states[1] = "bharataha";
console.log(states);
//outpt is karnataka bharatha rajastana hear goa replaced by bharatha

var user = ["kiran","k@gmail.com",24,true];
user.pop();
console.log(user)//hear last value (true) delted if pop used fron end its get delete one by one and
//output is kiran k@gmail.com 24

user.unshift("wow");
console.log(user);//hear its add new value of given wow in the 1st position because we gave unshift and array
//postion too shifted one by one and 
//output is wow kiran k@gmail.com 24 true

user.shift();//hear the first position values get delted 
console.log(user);//output is k@gmail.com 24 true

console.log(user.indexOf(24));
//hear shows output is 2 because 24 is in the 2 nd pos of array index

console.log(Array.from("kiran"));
//its store the each letter in the indexes of array
//out put is like [ 'k', 'i', 'r', 'a', 'n' ]

//more documentation we have to read about athe array 
