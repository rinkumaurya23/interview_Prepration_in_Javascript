//# primitive datatype 
// call by value 
// 7
// 1. Sting, number Boolean , Null,Undefined,BigInt ,Symbol-> Make a uniq  of value 

// javascript is a 

// const score = 10
// score = "Rinku"


// call by reference 
// 3 Objects Array,function
// non primitive datatype 


// const scoreValue = 1000



// const id = Symbol('234')
// const anotherId = Symbol("234")
//  console.log(id == anotherId)

// array 
// const hero = ["mohan","Sohan","ram"]
// Objects
// let myObje = {
//     name:"werg",
//     age :234,
//     email:"wergb@gmail.com"
// }


// const myFunc = function(){
//     console.log("helloWorld")

// }
// myFunc()
// console.log(undefined===null)  false 
// console.log(undefined==null )  true 





// stack memory Primitive Memory  memory is copy getting
// Heap Memory Non Primitive Memory  reference or Original value 



// let myYoutubeName = "rinkumaurya";
// let anothername = myYoutubeName;
// anothername = "ashishmaurya"

// console.log(anothername)
// console.log(myYoutubeName)  copy this is a stack memory



let user = {
    name:'Rinku Maurya',
    Age:23,
    Email:"rinkubhai2143200@gmail.com"
}
let user2= user
user2.Email="itrinku10@gmail.com"
console.log(user2)
console.log(user)

console.log(user.Email)
console.log(user2.Email)

