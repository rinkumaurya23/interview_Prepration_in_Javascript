// if 




// if(false){
//     // this is scope
// }

//  const isUserLoggedIn = false

//  if(isUserLoggedIn){
// console.log('User Loggged In ')
//  }

//  comparision Operator 
// {/* < less than    2<= */}
//  const temp = 21

//  if(temp != 41 ){
//     console.log("this is correct value ")

//  }else {
//     console.log("No... please enter the value of temp") 
// }
// console.log('default values')

 
// if(2 !=3){
//     console.log("executed")
// // }

// const score = 200;
// if(score > 100){
//     let  power = "fly";
//     console.log(`User Power ${power}`)

// }
// // console.log(score)
// const balance = 1200;

// // implicit
// if(balance > 500) console.log("test")

// mulitple conditions 


// if(balance < 500){
//     console.log('less then');

// } else if (balance < 750){
//     console.log("less then 750")
// }else if(balance < 1000){
//     console.log("less then 1000")
// }
// else {
//     console.log("default value to check",balance)
// }const 






const userLoggedIn = true ;
const userDebitCard = true ;
const loggedInFromGoogle= false;
const loggedInFromEmail = false ;



// if(userLoggedIn && userDebitCard && 2==4){
//     console.log("Allow to buy the course ")
// }
if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("user Logged In ")
}
console.log("Not correct the condition")