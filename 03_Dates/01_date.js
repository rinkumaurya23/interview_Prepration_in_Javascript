// Dates
  let myDate = new Date()
  console.log(myDate.toString())
  console.log(myDate.toLocaleString())
  console.log(myDate.toDateString())
// ?  Sun Sep 01 2024 02:17:58 GMT+0530 (India Standard Time)
// ?  9/1/2024, 2:17:58 AM
// ?  Sun Sep 01 2024
console.log(typeof myDate)


let mycreateDate = new Date (2024,9,1)
// console.log(mycreateDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(mycreateDate.getTime)
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

// ))

// `${newDate .getDay }` 


const date = newDate.toLocaleString('default',{
     weekday: "long",
    //  timeZone:myTimeStamp()
})
console.log(date)