// //object is collection of any type of data.
// const  person = {
//     name : "hetvi",
//     age : 20,
//     hobbies : ['reading','traveling','listening music'],
//     greet: function(){
//         console.log("hello")
//     }

// }
// //access value from object
// console.log(person.name)
// console.log(person['name'])

// //adding or modifying the data obj
// person.job = "developer"
// person.salary = 500000
// console.log(person)

// delete person.salary
// console.log(person)

// //nested object
// const person1 = {
//     name : "hetvi",
//     age : 20,
//     address:{
//         city:"keshod",
//         zipcode:'362220',
//         street:"123 main st."
//     }

// }
// console.log(person1)
// console.log(person1?.address?.city)
// console.log(Object.keys(person1))
// console.log(Object.values(person1))
// console.log(Object.entriess(person1))


// const user = {
//     name : "hetvi",
//     age : 20,
//     role : "admin",
//    designation : "developer",
//     address:{
//         city:"keshod",
//         zipcode:'362220',
//         street:"123 main st."
//     }
// }
// // const {name,age,role} = user
// // console.log(name,age,role)

// // const {name : profailName, age : profailAge} = user //rename
// // console.log(profailName,profailAge)

// const {name,age,role,state = "gujarat"} = user //default value
// console.log(name,age,role,state)

// const array = [1,2,3]
// const moreElement = [...array,4,5,6]
// console.log(moreElement)

// const originalArray = [1,2,3]
// const copiedArray = [...originalArray]
// console.log(copiedArray)

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const mergedArray = [...arr1,...arr2]
// console.log(mergedArray)

//spread opt. in obj
const user1 = {
    name : "user1",
    city : "keshod",
}
// console.log(user1)
// const newobj = {
//     ...user1,
//     role:"react devloper",
// }
// console.log(newobj)


//copy obj

 const user2 = user1
 console.log(user2)
