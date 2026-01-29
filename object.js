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

//nested object
const person1 = {
    name : "hetvi",
    age : 20,
    address:{
        city:"keshod",
        zipcode:'362220',
        street:"123 main st."
    }

}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entriess(person1))