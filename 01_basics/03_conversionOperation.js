// Int and String Conversion

let score = 33;
let score2 = "33a";

// console.log(typeof score); // output number
// console.log(typeof score2); // output string
// console.log("----------------------------------------------------------");

// lets try to change the datatypes of scores 

let valueInString = String(score); 
let valueInNumber = Number(score2) 

// console.log(typeof valueInString);  // output string
// console.log(typeof valueInNumber);  // output number
// console.log("----------------------------------------------------------");


// console.log("valueInString = ",valueInString); // output 33
// console.log("valueInNumber = " ,valueInNumber); // output NaN (Not a Number)
// console.log("----------------------------------------------------------");
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// Boolean conversion

let isLoggedIn = 1;

let valueInBoolean = Boolean(isLoggedIn);

// console.log(typeof valueInBoolean);
// console.log(valueInBoolean);

// 1 => true; 0 => false;
// "" => false
// "umer" => true


//********************************* Operations *******************************************

console.log("********************************* Operations *******************************************");

let value = 3;
let negvalue = -value;
// console.log(negvalue);




// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);
 

let name1 = "Umer"
let name2 = " Saeed"
let combineName = name1 + name2;
// console.log(combineName);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

// ********************************** prefix & postfix *******************************************

let x = 3;
const y = x++;

// console.log(`x=${x}, y=${y}`);
// Expected output: "x=4, y=3"

let a = 3;
const b = ++a;

// console.log(`a=${a}, b=${b}`);
// Expected output: "a:4, b:4"



