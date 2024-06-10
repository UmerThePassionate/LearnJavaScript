//Const
const accountId = 1234567;
// Let
let accountEmail = "abc@gmail.com";
// Var
var accountPassword = "65461345453";
// Simple
accountCity = "islamabad";
// Let
let accountState;  // what if we not assign the values to variables

// lets change variables values

// accountId = "2121212121"; // not allowed // you cannot change const variables values
console.log(accountId);


// lets change the reaming variables

accountEmail = "umer@gmail.com";
accountPassword = "1112222223333";
accountCity = "muzafrabad";

console.table([accountEmail,accountPassword,accountCity,accountState]);

// prefer not to use var because of scope problem in js
