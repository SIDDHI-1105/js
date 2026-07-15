const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"]; 
const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];

// marvelHeroes.push(dcHeroes); // Adding all DC heroes to the end of the marvelHeroes array
// console.log(marvelHeroes);

// console.log(marvelHeroes[6][0]); // Accessing the first element of the dcHeroes array, which is "Superman"

const allheros =marvelHeroes.concat(dcHeroes) ;
console.log(allheros); // The original marvelHeroes array remains unchanged after concat

const allheros2 = [...marvelHeroes, ...dcHeroes]; // Using the spread operator to combine arrays
console.log(allheros2); // The original marvelHeroes array remains unchanged after using the spread operator


const arr = [1,2,[3,4,[5,6]]];
console.log(arr.flat()); // Flattens the array by one level
console.log(arr.flat(2)); // Flattens the array by two levels
console.log(arr.flat(Infinity)); // Flattens the array completely, regardless of depth

console.log(Array.isArray(["sid"])); // Checks if arr is an array
console.log(Array.isArray("sid")); // Checks if arr is an array
console.log(Array.isArray({name:"sid"})); // Checks if arr is an array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Creates a new array with the provided scores

