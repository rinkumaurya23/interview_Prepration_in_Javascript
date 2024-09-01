// console.log("H")
// console.log("a")
// console.log("d")
// console.log("f")
// console.log("g")
// console.log("h")
// console.log("j")
// console.log("k")
// console.log("l")
// console.log("v")

// function sayHello(){
// console.log(`Hello May name is Rinku Maurya`)
// }
// sayHello()

// --------------------------------- 
// function addtwoNumbers(num1,num2){
//   console.log(num1+num2)
// }
// ------------------------------------- 
function addtwoNumbers(num1,num2){
let result = num1+num2
// console.log("Rinku") 
return result
// console.log("Rinku") no print 
  }
const result = addtwoNumbers(1,4)

// console.log("result Value : ",result)

function loginUserMessage(username="RM"){
    if(!username){
      console.log("please enter a username ")
      return 
    }
    return `${username} just loggedIn`
}
// console.log(loginUserMessage)

// const result1 = loginUserMessage()
// console.log(result1)

// console.log(loginUserMessage("Rinku"))

// ******************************************
// rest operator multiple operator 


function calculateCartPrice(num1,num2,...num3){
    return num1,num2,num3

}
const result3 = calculateCartPrice(2,400,500,500,600,700)
// console.log(result3)

// js
// // Copy to Clipboard
// myFunction(a, ...iterableObj, b)
// [1, ...iterableObj, '4', 'five', 6]
// { ...obj, key: 'value' }


const user = {
    username:"RInku",
    prices:23
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`)

}

// handleObject(user)

handleObject({
    username:"sam",
    price:399
})
const mynewArray = [200,400,600]
function returnSecond(getArray){
return getArray[2]
}
// console.log(returnSecond(mynewArray))
console.log(returnSecond([200,400,5000,600]))