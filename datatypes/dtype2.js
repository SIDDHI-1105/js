/* 
Here:
console is an object.
log is a method of the console object.
() calls the method.
 */ 



let score = "95";
let score2 = "92jsj";

console.log(typeof score);      // string
console.log(typeof(score));     // string

let valueinno = Number(score);
let valueinno2 = Number(score2);

console.log(valueinno);         // 95
console.log(valueinno2);        // NaN ✅

console.log(typeof valueinno);  // number
console.log(typeof valueinno2); // number

let bol = 0
let bool = Boolean(bol)
console.log(bool)
 
console.log(+true)
  