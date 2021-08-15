//for loop besic
// for (let i=0;i<=10;i++){
//     console.log("kiran");
// }
//output is 10 times of kiran 
//its besic 

var countries= ["india","austrelia","southAfrica",1947,"USA","UAE"];
for( let i=0;i<countries.length;i++){
    if(typeof countries[i] !== "string") continue;//hear check if not string its continue some other fields 
    //becuse hear we gave continue
console.log(countries[i]);
}