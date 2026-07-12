console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// JavaScript treats == (loose equality) and comparison operators (>, <, >=, <=) differently.
// With ==, null is not converted to 0.
// With comparison operators, null is converted to 0.

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)


console.log("2" == 2) // it converts and comapre therefore true
console.log("2" === 2); // === (strict equality) compares both value and data type.

