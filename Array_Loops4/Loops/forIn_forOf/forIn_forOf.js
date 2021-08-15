//for of loop syntax hear we got everything
const names = ["facebook","twitter","youtube","linkedin",];

for (const n of names){
    console.log(n);//all names got by printing n its syntax use in 
    //large appliaction fram work such as angular
}

//for in loop syntax 

const symobols = {
    yt:"youtube",
    fb:"facebook",
    insta:"instagram"
};

for(const n in symobols){//for in loop uses for only objects values get
    console.log(`key is ${n} value is ${symobols[n]} `)//hear access the value of key and values of key
}