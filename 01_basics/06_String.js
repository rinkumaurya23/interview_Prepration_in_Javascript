const name = "Rinku"
const repoCount = 19

// console.log(name+repoCount +"value") 
// this name is string inter-pollosation
console.log(`Hello My Name is ${name} my Repo Count is ${repoCount}`)

const gameName = new String("Rinku-mr")
console.log(gameName[0])
console.log(gameName.__proto__) // { }
console.log(gameName.charAt())
console.log(gameName.indexOf("n"))
const newString = gameName.substring(0,3)
console.log(newString) //Rin


const anotherStirng = gameName.slice(1,3)
console.log(anotherStirng)

const newStringOne = "    Rinku"
console.log(newStringOne.trim())

const url = "http://Google.com"
console.log(url.replace("Google","Yahoo"))
console.log(url.includes("Google"))


console.log(gameName.split("-"))