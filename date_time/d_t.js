

let mydate = new Date()
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toString())
console.log(typeof mydate)

let mydate1 = new Date(2023,6,16)
console.log(mydate1.toDateString())

let mydate2 = new Date("2024-07-15")
console.log(mydate2.toDateString())

let mytimestamp = new Date()

console.log(mytimestamp)
console.log(mytimestamp.getTime())

let newdate = new Date()
console.log(newdate.toString())
console.log(newdate.getFullYear())
console.log(newdate.getMonth())
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getHours())
console.log(newdate.getMinutes())
console.log(newdate.getSeconds())

newdate.toLocaleString("en-US", {weekday:"long", year:"numeric", month:"long", day:"numeric"})
