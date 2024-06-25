const name = "umer";
const repoCount = 50;


//oldway
// console.log(name+ repoCount + "value");
//moderan way
// console.log(`my name is ${repoCount} and my repo count is ${repoCount}`);

const gameName = new String('umer-Saeed');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const thirdString = "   umer   ";
console.log(thirdString);
console.log(thirdString.trim());

const url = "https://codewith%20.com";
console.log( url.replace('%20', 'umer'));

console.log(url.includes('sundar'));