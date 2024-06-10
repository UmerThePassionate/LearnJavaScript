// Int and String Conversion

let score = 33;
let score2 = "33a";

console.log(typeof score); // output number
console.log(typeof score2); // output string
console.log("----------------------------------------------------------");

// lets try to change the datatypes of scores 

let valueInString = String(score); 
let valueInNumber = Number(score2) 

console.log(typeof valueInString);  // output string
console.log(typeof valueInNumber);  // output number
console.log("----------------------------------------------------------");


console.log("valueInString = ",valueInString); // output 33
console.log("valueInNumber = " ,valueInNumber); // output NaN (Not a Number)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// Boolean conversion

let isLoggedIn = 1;

let valueInBoolean = Boolean(isLoggedIn);

console.log(typeof valueInBoolean);
console.log(valueInBoolean);

// 1 => true; 0 => false;
// "" => false
// "umer" => true