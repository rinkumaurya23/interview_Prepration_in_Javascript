//  var c = 404
let a=300
if(true){
    let a = 10
    //  b = 20
    const c = 30
    // console.log("Inner",a)
}
// console.log(a)
// console.log(b)
// console.log(c)


// clouser 


// nested scope 

function one(){
   const username="Rinku";
   

    function two(){
        const website ="youtube"
        // console.log(username)
    // console.log(website)


    }
    // console.log(website)
    two()

}
one()

if(true){
    const username1 = "Rinku"
    if(username1==="Rinku"){
        const website = " youtube"
        // console.log(username1+website)
    }
    // console.log(website)
}
// console.log(username1)

// +++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone1(2))
function addone1(num){
    return num+1
}


const fun = function(num){
    return num+3
}
fun(4) 
