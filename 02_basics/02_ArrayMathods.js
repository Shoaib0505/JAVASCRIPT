let morval_heros = ["Thor","Captain America","Iron Man"]
let dc_heros = ["Batman","Superman","Spiderman"]

// morval_heros.push(dc_heros)

// console.log(morval_heros[3][1]);


// const all_heros = morval_heros.concat(dc_heros)
// console.log(all_heros);


const allHeros = [...morval_heros, ...dc_heros]
// console.log(allHeros);

let ramdom_Numbers = [1,2,3, [4,5,6],7,[8,9,10]]
const allNumbers = ramdom_Numbers.flat(Infinity)
// console.log(allNumbers);

console.log(Array.isArray("Shoaib"));
console.log(Array.from("Shoaib"));
console.log(Array.from({ name: "Shoaib"}));// Intersting

let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1, sc2, sc3));


