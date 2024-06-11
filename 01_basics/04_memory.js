// Stack (Primitive), Heap (non-perimitive)


// Stack (Primitive)

let myYoutubeName = "umer";
let myBroNmae = myYoutubeName;
myBroNmae = "moviz";

// here is the sticky situation now guss what is the value in myYoutubeName.
// In Stack (Primitive) varables give referance value to other not their actual value like myYoutubeName give dammy data to myBroName.
// That's why myYoutubeName doesn't change by changing the value of myBroNmae.

console.log(myYoutubeName);
console.log(myBroNmae);



// Heap (non-perimitive)


let userOne = {
    email: "user@gmail.com",
    id: 5644444
};

let userTwo = userOne;

userTwo.email = "alpha@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Now again whats the value in userOne.email.
// In Heap (non-perimitive) objects give their actual value to other;