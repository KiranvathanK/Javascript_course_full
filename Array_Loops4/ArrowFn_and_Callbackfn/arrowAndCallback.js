function isEven(element){
    if (element % 2 === 0){
        return true;
    }
    return false;
}

console.log(isEven(3));//hear we get false bcz 3 is not a even (output is false)

//another type in one line 
var isEven = function (element){
    return element % 2 === 0;
}

console.log(isEven(4));//its too same as above code but shorter (output is true)
//hear we must give return value otherwise its send undefined 

//another example 
var num = [2,4,6].every(isEven);
console.log("kiran"+ num);//hear aftr array if dot puts so many methods are there 

//call back function which are arrow call back function 
// var num = [2,4,6].every(() => {})(besic syntax of arrow fun)

var num = [2,5,6].every((e) => {
    return e % 2 === 0;
})

console.log(num);//{} this used flower bracket then we need to return value

//if {} flower braccket not used then no need to return the values

var num = [2,4,6].every((e) =>(e % 2 === 0));
console.log("yapp"+ num);//call back fun without return so we used () hear  