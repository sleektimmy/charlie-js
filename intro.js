let myName = "Sleek Timmy"
let age = 77
let stateOfOrigin = "Lagos State"
let isMarried

isMarried = true
// isMarried = false

let statement = "My name is " + myName + " i am " + age
let jobTitle = `FrontEnd Engineer`

statement = `My name is ${myName} I am ${age} years old and I am from ${stateOfOrigin}.I work as a ${jobTitle} at Univelcity. I am ${isMarried ? 'maarried to Olar' : 'not Married'}`
// console.log(age)

console.log(jobTitle)
console.log(statement)
console.log(typeof statement)
console.log(typeof age)
console.log(typeof isMarried)