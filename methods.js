const letters = "He says \"A quick Brown Fox Jumps Over The Lazy Dog\""
const rhyme = `
twinkle, twinkle, little star,

    how I wonder what you are!

up above the world so high,
    like a diamond in the sky.
`

console.log(letters)
console.log(rhyme)

const len = letters.length
console.log("The length of the str is :", len)

//strig to upper case
const upper = letters.toUpperCase()
console.log("The string is in upper case:", upper)

//string to lower case
const lower = letters.toLowerCase()
console.log("The string is in lower case:", lower)

// charAt method

const char9 = letters.charAt(9)
console.log("The character at index 9 is:", char9)

// indexOf method

const indexOfA = letters.indexOf("a")
console.log("The index of 'a' is:", indexOfA)

// lastIndexOf method
const lastIndexOfA = letters.lastIndexOf("a")
console.log("The last index of 'a' is:", lastIndexOfA)

console.log(letters.indexOf("a") ==letters.lastIndexOf("a"))
console.log(letters.indexOf("x") ==letters.lastIndexOf("x"))
 // search for 'a' starting from index 10

 // match method
 const vreg = /[aeiou]/gi  //g=global, i=case insensitive
const vowels = letters.match(vreg)
console.log("The vowels in the string are:", vowels)
console.log("The number vowels in the string are:", vowels.length)

// includes method
const includesGoat = letters.includes("Goat")
console.log("Does the string include 'Goat'? :", includesGoat)

const includesFox = letters.includes("Fox")
console.log("Does the string include 'Fox'? :", includesFox)

// startsWith method

const startsWithHe = letters.startsWith("He")
console.log("Does the string start with 'He'? :", startsWithHe ? "Yes" : "No")
const startsWithSHe = letters.startsWith("She says")
console.log("Does the string start with 'She says'? :", startsWithSHe ? "Yes" : "No it doesnt")


// endsWith method
const endsWithStone = letters.endsWith("Stone")
console.log("Does the statement end with 'Stone' ? ", endsWithStone ? "Yes" : "No")

//concat method

// const concatStr = letters.concat (" ", 'Stone')
const concatStr = letters.concat (...[" ", 'Stone', ' and ', 'bread'])
console.log("The concatenated string is:", concatStr)

// substring method
const subStr = letters.substring(letters.indexOf('B'), letters.indexOf('x')+1)
console.log("The substring Brown Fox is:", subStr) 

// slice method
const sliceStr = letters.slice(letters.indexOf('B'), letters.indexOf('x')+1)
console.log("The sliced string is:", sliceStr)

// replace method
const replaceStr = letters.replace("Brown Fox", "Black Cat")
console.log("The replaced string is:", replaceStr)

const replaceVowels = letters.replace(/[aeiou]/gi, '*')
console.log("The string with vowels replaced is:", replaceVowels)

const replaceAllVowels = letters.replaceAll(/[aeiou]/gi, '*')
console.log("The string with vowels replaced is:", replaceAllVowels)


// trim method
const trimmedStr = letters.trim()
console.log("The trimmed string is:", trimmedStr.length)

//padstart and padEnd method
const paddedStart = letters.padStart(100, '*')
console.log("The padded string at start is:", paddedStart)

const paddedEnd = paddedStart.padEnd(130, '+')
console.log("The padded string at end is:", paddedEnd)

// split method
const splitStr = letters.split(" ")
console.log("The split string is:", splitStr)

const splitStr2 = letters.split(/[\s]+/)
console.log("The split string by whitespace or comma is:", splitStr2)