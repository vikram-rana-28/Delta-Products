//practice Qs
let para1 = document.createElement("p");
para1.innerText="Hey i'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3 !";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText = "My name is Vikram Rana";
p.innerText = "Me too !";

div.append(h1);
div.append(p);
div.classList.add("box");

document.querySelector("body").append(div);

// //Practice Assignment

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me!";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");

let h2= document.createElement("h2");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h2);
h1.classList.add("h2");

let p1 = document.createElement("p1");
p1.innerHTML ="Apna College <b>Delta</b> Practice";

document.querySelector("body").append(p1);
p1.classList.add("p1");