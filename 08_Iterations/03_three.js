// for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,6,7,8]

// for (const num of arr) {
//     console.log(num)
//     // console.log(arr)
//     // console.log(arr.length)
    
// }

// const greeting = "hello"

// for (const greet of greeting) {
    
//     console.log(`Each code is ${greet}`)
// }


// // maps  unique value 

// const map = new Map()
// map.set("IN","india")
// map.set("us","America")
// map.set("gn","Gonda")
// map.set("IN","india")


// console.log(map)

// for (const key in map)
//     {
//         console.log(key)
//     }
    // const myObject = {
    //     "game":"NFS",
    //     "game@":"Spiderman"
    // }
   

    // for (const key in myObject) {
    //  console.log(myObject[key])
    // }



    // forEach loop 


    const coding = ['js','es','node','react','redux','html',]

    // coding.forEach((val)=>{
    //     console.log(val)
    // })
    
//    coding.forEach(function (item){
//     console.log(item)
//    })


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })





// const myCoding= [
//     {
//         langname:"javascript",
//         langFile:"js"
//     },
//     {
//         langname:"java",
//         langFile:"java"
//     },
//     {
//         langname:"python",
//         langFile:"py"
//     },
    
// ]

myCoding.forEach((item)=>{
    console.log(item.langFile)
})