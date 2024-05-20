// setTimeout(()=>{
//     console.log("apna college");
// },2000);
// setTimeout(()=>{
//     console.log("hello world");
// }, 2000);
// console.log("Namaste");

// h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     }, delay);
// }
// setTimeout(()=>{
//     h1.style.color="red";
// }, 1000);

// setTimeout(()=>{
//     h1.style.color="orange";
// }, 2000);

// setTimeout(()=>{
//     h1.style.color="pink";
// }, 3000);

// setTimeout(()=>{
//     h1.style.color="purple";
// }, 4000);

// setTimeout(()=>{
//     h1.style.color="red";
// }, 5000);

// setTimeout(()=>{
//     h1.style.color="orange";
// }, 6000);

// setTimeout(()=>{
//     h1.style.color="pink";
// }, 7000);

// setTimeout(()=>{
//     h1.style.color="purple";
// }, 8000);

// h1 = document.querySelector("h1");
// function changeColor(color, delay, nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextChangeColor) nextChangeColor();
//     }, delay);
// }

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("pink", 1000 ());
//         });
//     });
// });

function saveToDb(data){
    return new Promise((reslove, reject)=>{
        let internetSpeed= Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            reslove("success:data was saved");
        }else{
            reject("failure:data was not saved")
        }
    });
}

let request = saveToDb("apna college");
request
.then(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
})
async function greet(){
    return "hello world"
}
let hello = async ()=>{};

//API
let url= "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1=", data.fact);
//     return fetch(url);
// })
// .then((data2)=>{
//     console.log("data2 =", data2.fact);
//     return res.json();
// })
// .catch((e)=>{
//     console.log("ERROR", e);
// }
    
