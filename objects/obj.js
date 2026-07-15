// singleton object
// Object.create


//objects literal

const mysym = Symbol("key1")

const myobject = {
    "name": "John",
    age: 30,
    [mysym]: "mykey1",
    location: "New York",
    email: "jhon@gmail.com",
    isLoggedIn: true,
    lastLogin: ["monday","wednesday"],
}
console.log(myobject.email)
console.log(myobject["email"])
//console.log(myobject.name)//error
console.log(myobject["name"])//correct way to access the property of an object
console.log(myobject[mysym])//correct way to access the property of an object

myobject.email = "dif@gaiml.com"
//Object.freeze(myobject) // prevents any changes to the object
myobject.email = "difchat@gaiml.com"
console.log(myobject.email) // email remains unchanged due to Object.freeze


myobject.greeting = function(){
    console.log("Hello ")
}
console.log(myobject.greeting())

myobject.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}
console.log(myobject.greeting2())





