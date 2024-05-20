//practice Question
let  array = [
    {
        name:"Vikram rana",
        marks:87.5,
        grade:"A",
    },
    {
        name:"Rahul rana",
        marks:88.5,
        grade:"B", 
    },
    {
        name:"Shivam rana",
        marks:90,
        grade:"0",
    },
];
array.forEach((student)=> {
    console.log(student.marks);
    console.log(student.name);
});

//practice Question
let nums = [2,4,9,0,6,8,5,1];
let even = nums.filter((num)=>(num%2==0));
console.log(even);

//Reduce
//finding maximum in an array

let num = [1,3,2,4,9,13,19,6];

let max=0;
for(let i=0; i< num.length; i++){
    if(max < num[i]) {
        max=num[i];
    }
}
console.log(max);

//practice Question
let arr = [20,40,60,80];
let ans = arr.every((el) => el%10==0);

console.log(ans);

let arrays = [4,6,1,0,-5,23,8];
let min = 0;
for(let i=0; i< arrays.length; i++){
    if(min> arrays[i]){
        min = arrays[i];
    }
}
console.log(min);

//spread
let arrr = [1,2,3,4,5,6];
Math.min(...arrr);
console.log(...arrr);
console.log(Math.min(...arrr));
console.log(Math.max(...arrr));

let data= {
    email:"vikram@gmail.com",
    password:"abcd",
};
let newData={
    ...data, id:123
};
console.log(newData);

//practice Assignment
let numb = [2,6,4,1,5];

const square =numb.map((num)=>num*num);
console.log(square);

const sum= numb.reduce((res, el)=>res+ el,  );
let avg = sum/numb.length;
console.log(avg);

let number = [2,0,4,-4,3,8,7];
console.log(number.map((number)=> number + 5));

let strings =["rana","vikram","rahul","shivam","shivam"];
console.log(strings.map((string)=> string.toUpperCase()));

const doubleAndReturnArgs =(arr, ...args)=> [
    ...arr,
    ...args.map((v)=> v*2),
];
console.log(doubleAndReturnArgs([1,3,4], 5,6));

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a:1, b:3, c:4}, {d:2, e:5, f:3}));