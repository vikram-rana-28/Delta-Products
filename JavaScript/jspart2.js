// Assignment2

let num = 20;
if(20%10==0){
    console.log("Good");
}else{
    console.log("Bad")
}

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`${name} is ${age} years old`);

let quarter = 3;
switch(quarter){
    case 1:
        console.log("january, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Wrong month")
}

let str =  "appreciate"
if((str[0]=='a' || str[0]== 'A') && (str.length>5)){
    console.log("it is a golden string");
}else {
    console.log("Not a golden string");
}

let a =5;
let b = 18;
let c = 12;
if(a>b){
    if(a>c){
        console.log(a,"is largest");
    }else{
        console.log(c,"is largest");
    }
}else{
    if(b>c){
        console.log(b,"is largest");
    }else{
        console.log(c,"is largest");
    }
}
let num1= 32;
let num2=47852;
if((num1%10==num2%10)){
    console.log("numbers have the same last digit which is",num%10);
}else{
    console.log("numbers don't have the same last digit");
}