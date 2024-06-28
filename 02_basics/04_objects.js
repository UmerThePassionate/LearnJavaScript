//Singleton
// Object.create

// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "umer";
tinderUser.isLoggrdIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "umer@gmail.com",
    fullNmae:{
        userFullNmae:{
            firstNmae: "Umer",
            lastName: "Saeed"
        }
    }
};

// console.log(regularUser.email);
// console.log(regularUser.fullNmae);
// console.log(regularUser.fullNmae.userFullNmae);
// console.log(regularUser.fullNmae.userFullNmae.firstNmae);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 5: "f"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id: "1234568",
        email: "umer@gmail,com"
    },
    {
        id: "1234568",
        email: "umer@gmail,com"
    },
    {
        id: "1234568",
        email: "umer@gmail,com"
    },
    {
        id: "1234568",
        email: "umer@gmail,com"
    },
    {
        id: "1234568",
        email: "umer@gmail,com"
    },
]

users[1].email

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggrdIn'));