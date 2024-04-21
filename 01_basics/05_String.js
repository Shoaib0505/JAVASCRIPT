let name = "Shoaib khan"
let repoCount = 50

console.log(`Hello, My name is ${name} and my repo count is ${repoCount}.`);

let gameName = new String ('Khan-kh-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Khan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://khan.com/shoaib%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));