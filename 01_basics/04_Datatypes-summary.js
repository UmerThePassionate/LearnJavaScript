// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Number

const score = 100;
const scoreValue = 100.3;


const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('1122')
const anotherId = Symbol('1122');// value will not be same 

console.log(id === anotherId);

// const bigNumber = 165431546541643513546; 


// Reference (Non primitive)

// Array, Objects, Functions 


const heros = ["Ironman","Spiderman", "Thor" ]

let myObj = {
    name: "umer",
    age: 22,
}

const myFunction = function(){

    console.log(1+1);
}