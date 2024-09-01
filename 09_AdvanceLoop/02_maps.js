// const myNumber = [1,2,3,4,5,6,7,8,9]

// // const newNums = myNumber.map((num)=>num+10)
// const newNums = myNumber
// .map((num)=>num*10)
// .map((num)=>num+1)
// .filter((num)=>num>=40)

// console.log(newNums)



// reduce method  m

const myNums = [1,2,3]

const total = myNums.reduce((acc,currval)=>{
    console.log(`acc${acc} and currval ${currval}`)
    return acc+currval
},0)
console.log(total)

const shopcart = [
    {
        itemName :"jsCourse",
        price:22
    },
    {
        itemName :"pythhon",
        price:34
    },
    {
        itemName :"java",
        price:43
    },
    {
        itemName :"cpp",
        price:87
    },
    {
        itemName :"React",
        price:234
    }
]


const total1 = shopcart.reduce((acc,item)=>{
      return acc+item.price 

},0)
console.log(total1)

