const rhyme = `twinkle, twinkle, little star,

how I wonder what you are!

up above the world so high,

like a diamond in the sky.
`
// find the index of diamond 
const diamondIndex = rhyme.indexOf("diamond")
console.log("The index of diamond is :", diamondIndex)

// extract the last line from like till the end, store in a variable called last 
const last = rhyme.substring(rhyme.indexOf("like"), rhyme.indexOf("sky")+4)
console.log("The last line is :", last)

// find the index of Gold 
const goldIndex = rhyme.indexOf("Gold")
console.log("The index of Gold is :", goldIndex) 

// if silver exists, return yes ortherwise, return no silver
const includesSilver =rhyme.includes("silver")
console.log("Does the rhyme include 'silver'? :", includesSilver ? "Yes" : "No silver")

// replace star with sun 
const replaceSun = rhyme.replace("star", "sun")
console.log("The rhyme after replacing 'star' with 'sun':", replaceSun)

//   replace the last the with that
const replaceLastThe = rhyme.replace("the", "that");
console.log("The rhyme after replacing the last 'the' with 'that':", replaceLastThe)   

// the rhyme should start with capital letter
const capitalizedRhyme = rhyme.charAt(0).toUpperCase() + rhyme.slice(1)
console.log("The rhyme after capitalizing the first letter:", capitalizedRhyme) 