//practice Question
function dice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}

dice();

//practiceQS
function calcAve(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
calcAve(24,45,90);

//practiceQS
function printTable(){
    for(let i=2; i<=20; i=i+2){
        console.log(i);
    }
}
printTable(); 

//practiceQs
function sum(){
    let sum = 0;

    for(let i=1; i<=5 ; i++){
        sum+=i;
        
    }
    return sum;

}

//practiceqs
let str=["hi","vikramrana","how","are","you"];

function concat(str){
    let result="";
    
    for(let i=0;i<=str.length; i++){
        result+=str[i];
    }

    return result;
}
//practiceQS
let greet="hello";

function changeGreet(){
    let greet="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

const mul=function (a,b){
    return a*b;
}
//methods
const calculator ={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
};

//Practice Assignment
let arr=[5,7,8,12,9,3,6,2,1];
let num=5;

function getElements(arr,num){
    for(i=0; i<=arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);

let string = "abcdefgggh"

function getUnique(string){
    let ans="";

    for(let i=0; i<=string.length; i++){
        let currChar=string[i];
        if(ans.indexOf(currChar)== -1){
            ans+=currChar;
        }
    }
    return ans;
    
}
getUnique(string);

let country= ["Australia","Germany","United states of America","India","Russia"];

function longestName(country){
    let ansIdx = 0;
    for(let i=0; i < country.length;i++ ){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longestName(country);

let stri ="apnacollege";

function countVowels(stri){
    let count=0;
    for(let i=0; i< stri.length; i++){
        if(
            stri.charAt(i) == "a" ||
            stri.charAt(i) == "e" ||
            stri.charAt(i) == "i" ||
            stri.charAt(i) == "o" ||
            stri.charAt(i) == "u" 
        ) {
            count++;
        }
    }

    return count;
}


let start = 100;
let end = 200;

function generateRandom(start, end){
    let diff = end - start;
    return Math.floor(Math.random()*diff)+ start;
}
console.log(generateRandom(start,end));
