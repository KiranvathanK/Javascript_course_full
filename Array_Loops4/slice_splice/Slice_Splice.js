//slice method
const num = [1,2,22,11,42,212];
//console.log(num.slice(1,5));
//output is [ 2, 22, 11, 42 ]its like we cut both side cut and take a peice of cake 
//so its like from 1 mean inclusive 5 mean exclusive
//console.log(num.slice(4));
//output ie [ 42, 212 ] hear slice from 1to 4 position but 4 is exclusive pos so its leave slice and shown result 



//splice method 
const val = [1,2,34,5,645,23,22,21];
//val.splice(1,3,"kiran");
console.log(val)
//out put is [ 1, 'kiran', 645, 23, 22, 21 ]
//hear from 2 take and count 3 values from 2 so 2,34,5 yhese are splice and put the vale Kiran inside that 
val.splice(1,3,"kiran","babe");
console.log(val);
//hear from 2 take and count 3 values from 2 so 2,34,5 yhese are splice and put the vale Kiran and babe 
//both becuse array so many values we shall apply that are splice and put
//inside that 
//output is [ 1, 'kiran', 'babe', 645, 23, 22, 21 ]