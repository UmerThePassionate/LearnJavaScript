
// objects literals


const mySym = Symbol("Key1")

const jsUser = {
    name: "Umer",
    "full name": " Umer Saeed",
    [mySym]: "mykey1",
    age: 15,
    location: "islamabad",
    email: "umersaeed@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday","Saturday"]    
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser);
// jsUser.email = "umerali@gmail.com";
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("hi");
// }

// jsUser.greetingTwo = function(){
//     console.log(`hi, ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());