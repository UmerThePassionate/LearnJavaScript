//Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString()); 
// console.log(myDate.toISOString()); 
// console.log(myDate.toTimeString()); 
// console.log(myDate.toLocaleString()); 
// console.log(myDate.toLocaleDateString()); 
// console.log(typeof myDate);

// let myCretedDate = new Date(2023, 0, 23, 5, 3, 4);
let myCretedDate = new Date("01-14-2024");
// console.log(myCretedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCretedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());


newDate.toLocaleString('default', {
    weekday: "long"
})

