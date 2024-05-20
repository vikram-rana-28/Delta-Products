// function PersonMaker(name, age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi, my name is ${name}`);
//         }
//     }
//     return person;           //Factory Function
// }


// function Person(name, age){
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`)
//         },
//     };
//     return person;
// }
// let p1 = new Person("vikram", 23);
// let p2 = new Person("Rahul", 25);   //constructors


// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`)
// }
// let p1 = new Person("Rahul", 25);


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`)
//     }
// }
// let p1 = new Person("Vikram", 23);
// let p2 = new Person("Rahul", 25);    //classes

//Inheritance

// class Student {
//     constructor (name, age, marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     talk(){
//         console.log(`Hi, i am ${this.name}`);
//     }
// }
// let student1 = new Student("Shivam", 21, 87);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`HI, i am ${this.name}`);
    }
}


class Student extends Person {
    constructor (name, age, marks){
        super(name, age);
        this.marks = marks;
    }
    talk(){
        console.log(`Hi, i am ${this.name}`);
    }
}
let student1 = new Student("Rahul", 23, 86);

class Teacher extends Person {
    constructor (name, age, subject){
        super(name, age);
        this.subject= subject;
    }
    talk(){
        console.log(`Hi, i am ${this.name}`);
    }
}
let teacher1 = new Teacher("Vikram Rana", 23, "Math");