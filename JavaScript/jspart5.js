//practice question
//Twitter Post
const post ={
    username:"@vikram-rana28",
    content: "This is my first post",
    likes:200,
    reposts:10,
    tags:["@rahul-rana216","@shivam-rana33"],
};
console.log(post);

//practiceQS
const students = {
    name:"vikam rana",
    grade:"A",
    city:"Patna",
};
console.log(students)

//Random Integers
//1 to 50
let num =Math.random();
num = num*10;
num=Math.floor(Math.random()*10) +1
//OR
let no = Math.floor(Math.random()*10)+1;

//Guessing Game
// const Max = prompt("enter the max number");
// const random = Math.floor(Math.random()*Max) +1;
// let guess = prompt("guess the number");

// while(true){
//     if(guess=="quit"){
//         console.log("you quit");
//         break;
//     }
//     if(guess==random){
//         console.log("you are right! Congrats!");
//         break;
//     }else if(guess<random){
//         guess=prompt("your guess was too small. please try again!");
//     }else{
//         guess=prompt("your guess was too large.please try again.");
//     }
// } 

//practice Assignment
let dice = Math.floor(Math.random()*6)+1;
console.log(dice);

const car={
    name:"maruti",
    model:"maruti suzuki Dzire",
    color:"black",
}
console.log(car.name);

const person = {
    name:"Vikram Rana",
    age:22,
    city:"Delhi",
};
person.city="Patna"
person.country="India"

console.log(person);


