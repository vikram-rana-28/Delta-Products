//Practice Question
const square=n => n*n;
console.log(square(5));

// let id=setInterval(()=>{
//     console.log("Hello World");
// }, 2000);
// setTimeout(()=>{
//     clearInterval(id);
// },2000*5);

//Practice Assignment
const arrayAverage = (arr)=> {
    let total=0;
    for(let number of arr) {
        total+= number;
    }
    return total;
};
let arr = [2,4,6,8,10];
console.log(arrayAverage(arr));


let num=10;
const isEven =(num)=> num%2 == 0;
console.log(isEven(num));


const object = {
    message: "hello world",
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,2000);


let length = 4;
function callback(){
    console.log(this.length);
}
const obj= {
    length:5,
    method(callback){
        callback();
    },
};
obj.method(callback,1, 2);





