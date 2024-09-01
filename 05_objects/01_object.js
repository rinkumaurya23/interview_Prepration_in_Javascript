// singleton -> make a construction


// objects literals  (decalre)

// Object.create -> this is Singleton
const mySym = Symbol("myKey1")

const jsUser = {
    name : 'Rinku',
    "fullName":"RInkumaurya",
    [mySym]:"myKey1",
    Age:23,
    Email:"itrinku10@gmail.com",
    Address:"Gonda",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.Email)
console.log(jsUser["Email"])
console.log(jsUser.fullName)
console.log( typeof jsUser[mySym])


jsUser.Email="rinkubahi2143200@gmail.com"
// Object.freeze(jsUser)
console.log(jsUser)

console.log("****************")

jsUser.greeting = function(){
    console.log("Hello js User")

}
jsUser.greetingTo = function(){
    console.log(`Hello js user ${this.name}`)

}
console.log(jsUser.greetingTo())
// console.log(jsUser.greetingTO())