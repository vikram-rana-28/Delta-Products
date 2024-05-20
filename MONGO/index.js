const mongoose = require("mongoose");

main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age: Number
});

const User = mongoose.model("User", userSchema);

User.deleteOne({name:"rahul"}).then(res=>{
    console.log(res);
})

// User.findOneAndUpdate({name: "rohan"}, {age:35}).then(res =>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({age:{$gt:23}})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Rana", email: "rana@123.com", age:23},
//     {name:"rohan", email: "rohan@123.com", age:24},
//     {name:"vikram", email: "vikram@123.com", age:23},
// ]).then(res =>{
//     console.log(res);
// });

// const user1 = new User({
//     name: "vikram",
//     email: "vikram@123.com",
//     age:22,
// });
// const user2 = new User({
//     name:"rahul",
//     email:"rahul@123.com",
//     age:25
// })

// user2.save().then(res =>{
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

