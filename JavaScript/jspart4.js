//practice Question
//favorite movie
// let favMovie = "Jawan";
// let guess=prompt("guess my favorite movie");

// while(guess != favMovie){
//     if(guess=="quit"){
//         console.log("You quit");
//         break;
//     }
//     guess = prompt("wrong guess.please try again");
// }
// if(guess==favMovie){
//     console.log("congrants" );
// }else{
//     console.log("you quit");
// }

//loops with arrays
let fruits = ["mango","apple","banana","litchi","orange"];

for(let  i=0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}
//TODO App
// let req= prompt("please enter your request");

// while(true){
//     if(req=="quit"){
//         console.log("quiting app");
//         break;
//     }
//     if(req=="list"){
//         console.log("............");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log(".............");
//     }else if(req=="add"){
//         let task= prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
// }




//Practice qs( print all odd numbers 1 to 15)
for(i=1; i<=15; i=i+2){
    console.log(i);
}
//practice Assignment
let arr=[1,2,3,4,5,6,2,3,2];
let num=2;

for(let i=0; i<arr.length; i++){
    if(arr[i] ==num){
        arr.splice(i,1);
    }
}
console.log(arr);

let number = 287152;
let count= 0;
let copy = number;

while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

let numbers= 2871527;
let sum= 0;
let copi = numbers;

while(copi>0){
    digit= copi % 10;
    sum+= digit;
    copi = Math.floor(copi/10);
}
console.log(sum);

let n = 5;
let factorial = 1;
for(let i=1; i<=n; i++){
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

let array =[3,5,7,9,12,34,6,11]
let largest = 0;

for(let i=0;i<=array.length; i++){
    if(largest < array[i]){
        largest=array[i];
    }
}
console.log(largest);




