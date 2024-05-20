// PracticeQS
let msg="   help!   "
console.log(msg.trim().toUpperCase());

let str="ApnaCollege";
console.log(str.slice(4,9));
console.log(str.indexOf("na"));
console.log(str.replace("Apna","Our"));
console.log(str.slice(4).replace("l","t"))
console.log(str.slice(4).replace("l","t").replace("l","t"))
//practice.qs
let students=["aman", "rajat","vikram","rana","rahul"]

//practice.QS
let arr= ["january","july","march","august"]

//practice.qs
let primary = ["red","yellow","blue"];
let secondary=["orange","green","violet"];
console.log(primary.concat(secondary))
console.log(primary.reverse());
console.log(primary.indexOf("yellow"));

// Slice.method
let colors= ["red","yellow","blue","orange","pink","white"];
console.log(colors.slice(0,3));
console.log(colors.slice(-2));

//practice.QS
let lang=["c","c++", "html","javascript","python","java","c#","sql"];
console.log(lang.reverse())
console.log(lang.indexOf("javascript"))

//practice.QS
let ticTac =[['X', null,'O'],[null,'X',null],['O',null,'X']];

//practice Assignment
let array = [7,9,0,-2];
let n=3;
let ans = array.slice(0,n);
console.log(10);

// let string = prompt("please enter a string");
// if(string.length==0){
//     console.log("String is empty");
// }else{
//     console.log("string is not empty");
// }

let char = "ApnaCollege"
let idx = 7;
if(char[idx]==char[idx].toLowerCase()){
    console.log("character is lowercase");

} else{
    console.log("character is not lowercase");
}
// let mor = prompt("please enter your character");
// if(mor.length==0){
//     console.log("character is empty");
// }else{
//     console.log("character is fullfil");
// }

// let strr= prompt("please enter your string");
// console.log(`original string=${strr}`);
// console.log(`string without spaces=${strr.trim()}`);

let num =[4,9,0,5,"hello",-10,'a'];
let item = -1;
if(num.indexOf(item) !=-1){
    console.log("element exist in aray");
}else{
    console.log("element doesn't exist in array");
}

