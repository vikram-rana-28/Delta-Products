const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next)=>{
//     console.log("hi i am midddleware");
//     // res.send("middleware finished");
//     next();
// });

// app.use((req, res, next)=>{
//     console.log("I am only random");
// });

const checkToken =  (req, res, next)=>{
    let{token}= req.query;
    if(token === "giveaccess"){
        next();
    }else{
        throw new ExpressError(401, "ACCESS DENIED!");
    } 
};

app.get("/api",checkToken, (req, res)=>{
    res.send("data");
});

//logger-morgan
// app.use((req, res, next)=>{
//     req.time = new Date(Date.now());
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })

app.get("/", (req, res)=>{
    res.send("hi, i am root");
});

app.get("/random", (req, res)=>{
    res.send("this is a random page");
});

app.get("/err", (req, res)=>{
    abcd = abcd;
});

app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "Access is forbidden");
});

app.use((err,req,res,next) => {
    let { status = 500 , message = "something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(8080, ()=>{
    console.log("server listening on port 8080");
});