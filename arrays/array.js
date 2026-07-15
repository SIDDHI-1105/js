const myarr = [1, 2, 3, 4, 5]
console.log(myarr)
console.log(myarr.length)
console.log(myarr[0])
console.log(myarr[myarr.length-1])

const myarr2 = ["apple", "banana", "cherry", "date"]
console.log(myarr2)

const myarr3 = new Array(1,2,3,4,5)
console.log(myarr3)

myarr3.push(6)
console.log(myarr3)

myarr3.pop()
console.log(myarr3)

myarr3.shift()
console.log(myarr3)// removes the first element of the array

myarr3.unshift(0)
console.log(myarr3) //0 added at the satrt of the array

console.log(myarr3.indexOf(3)) // returns the index of the element in the array
console.log(myarr3.includes(3)) // returns true if the element is present in the array


const myarr4 = myarr.join();

console.log(myarr4) // returns a string of the array elements separated by commas
console.log(typeof myarr4) // returns the type of the variable


//slice and splice methods
const myarr5 = [1,2,3,4,5,6,7,8,9]

const myarr6 = myarr5.slice(2,5) // returns a new array with elements from index 2 to 4
console.log(myarr6)

myarr5.splice(2,3) // removes 3 elements from index 2
console.log(myarr5)

// slice()
// - Does NOT modify the original array
// - Returns a new array containing the selected elements

// splice()
// - Modifies the original array
// - Used to add, remove, or replace elements
// - Returns the removed elements