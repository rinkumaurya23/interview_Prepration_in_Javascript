// Object -> 

// const tinderuser = new Object() singleton objects 
const tinderuser = {}
tinderuser.id="12sdf"
tinderuser.name="Mohan"
tinderuser.isLoggedIn=false

// console.log(tinderuser)
const regulareUser = {
    email:"itrinku10@gmail.com",
    fullName:{
        userFullName:{
            firstName:"rinku",
            lastname:"maurya"

        }
    }
}
// console.log(regulareUser.fullName.userFullName)

const obje1 = {1:"a",2:"b",3:"c"}
const obje2 = {4:"d",5:"e",6:"f"}
const obje3 = {7:"g",8:"h",9:"i"}
// const obje3 = {obje1,obje2}
// {
//     obje1: { '1': 'a', '2': 'b', '3': 'c' },
//     obje2: { '4': 'd', '5': 'e', '6': 'f' }
//   }
// console.log(obje3)\

const obje4=Object.assign({},obje1,obje2,obje3)
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obje4)


// const obj3 = {...obje1,...obj2}
// console.log(obj3)


const users = [
    {
        id:1,
        email:'er3er@gmail.com'
    },
    {
        id:1,
        email:'er3er@gmail.com'
    },
    {
        id:1,
        email:'er3er@gmail.com'
    },
    {
        id:1,
        email:'er3er@gmail.com'
    },
    {
        id:1,
        email:'er3er@gmail.com'
    },
    {
        id:1,
        email:'er3er@gmail.com'
    },

]
users[1].email
console.log(tinderuser)
users[1].email
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty("isLoggedIn"))


