let age= 10;
if(age >=18){
    console.log("you can vote");
}else if(age >=15){
    console.log("you cannot vote");
}else if(age< 12){
    console.log("next for better luck");
}
// PracticeQS
let marks= 80;
if(marks>=85){
    console.log("A+");
}else if(marks>= 70){
    console.log("B");
}else if(marks<=60){
    console.log("C")
}
// PracticeQS
let month="june"
if (month=== "january"){
    console.log("winter is here!");
}else if(month==="march"){
    console.log("Holy festival");
}else if(month==="april"){
    console.log("summer is here!");
}else{
    console.log("love is here")
}
// Practice Qs
let size= "XL"
if(size==="XL"){
    console.log("Price is Rs.250");
}else if(size==="L"){
    console.log("Price is 200");
}else if(size==="M"){
    console.log("Price is Rs.100");
}else if(size==="S"){
    console.log("Price is Rs.59");
}
// PracticeQS
let string= "apple"
if((string[0]==='a')&& (string.length>3)){
    console.log("It is a good string");
}else{
    console.log("it is not good string")
}
//Practice.qs
let = 12;
if((12%3===0) && ((12+1===15) || (12-1===11))){
    console.log("safe");
}else {
    console.log("unsafe");
}
// switch statement
let color = "black";
switch(color){
    case"red":
    console.log("stop");
    break;
    case"yellow":
    console.log("slow down");
    break;
    case"green":
    console.log("Go");
    break;
    default:
    console.log("Broken light")
}
//practice Qs.
let day = 5;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
            console.log("Sunday");
            break;
    default:
        console.log("Wrong day!")        
}
// alert("something went wrong")
// prompt("please enter your roll no.")

// let firstName = prompt("enter your first name");
// let lastName = prompt("enter you last name")
// console.log("Welcome", firstName,"", lastName,"!")