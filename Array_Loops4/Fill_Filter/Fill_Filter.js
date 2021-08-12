//fill method
const num = [22,12,53,51,32];

console.log(num.fill("h"));
//hear its fills h value to all values of Number
//out put is [ 'h', 'h', 'h', 'h', 'h' ]

//if need to give specify values like from hear to start and upto there end then we gave values
//example 

const num1 = [22,02,12,21,56,23,355]
console.log(num1.fill("kiran", 3,6));//hear kiran fill from the 21 and ends in the 23
//hear kiran value 3 is starting postion 6 is ending position

//Filter method 
const names = ["kiran" , "k", "j", "b"];
const result = names.filter( (num) => num != "kiran" );//while filter applying its all result stored in another array
console.log(result);

//hear check the values kiran not equal condition gave so its deleted shows output
//output is [ 'k', 'j', 'b' ]  