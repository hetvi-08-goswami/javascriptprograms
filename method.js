// //string methods
// //length()
// //trim()
// //toUpperCase()
// //toLowerCase()
// //indexOf()
// //slice()
// //subSstring()
// //replace()
// //concat()
// //spit()

// let str = " hello javascript world "
// console.log(str)
// console.log("length():" ,str.length)

// let trimText = str.trim();
// console.log("trim():",trimText.length)

// console.log("toUpperCase():",str.toUpperCase())
// console.log("toLowereCase():",str.toLowerCase())

// console.log("include():",str.includes("javascript"))

// console.log("indexOf():",str.indexOf("javascript"))

// console.log("slice():",str.slice(2,7))

// console.log("substring():",str.substring(3,8))//not allow(-)

// console.log("replace():",str.replace("hello","hi"))

// console.log("concat():",str.concat("kem chho"))

// console.log("split():",str.split(" "))//give in diffrent string




//array method
//length()
//push()
//pop()
//unshift()
//shift()
//concat()
//includes()
//indexOf()
//slice()
//join()
//delete()
//map()
//filter()
//find()
//forEach()
//sort()
///reverse()
//flat()

// let arr = ['one','two','three']
// console.log("default array :",arr)

// console.log("length() : ",arr.length)//devide by  two (than devide with two part)

// console.log("push() : ",arr.push("new added element"))//arr.push("new added element")
// console.log("array after push :",arr)

// arr.pop();
// console.log('array after pop :',arr)

// arr.unshift("firsr element")
// console.log('array after unshift :',arr)//add into first


// arr.shift()
// console.log('array after shift :',arr)//begining of array

// let newArr = ["str 1","str 2"];
// let MixedArr = arr.concat(newArr);
// console.log("default array after concat :",arr)
// console.log("default array after concat :",MixedArr)

// console.log("include :",arr.includes("three"))
// console.log("indexOf() :",arr.indexOf("three"))

// console.log("slice :",arr.slice(2,5))
// console.log("splice :",arr.splice(2,4))

// console.log("join() :",arr.join(", "))
// delete arr[4]
// console.log(arr)


// console.log("array iteration method : ")
// let numbers = [1,2,3,4,5]

// console.log("map : ",numbers.map(num => num * 2))
// console.log("after map old array : ",numbers)

// console.log("after filter old array :",numbers)  // when use loop with condition

// console.log("foreach : ")
// numbers.forEach(num => console.log(num))

// let num = [3,5,2,4,1]
// console.log("sort():",num.sort())     //shorting
// console.log("reverse() : ",num.reverse())

// let nestedArray = [1,2,[3,4],[5,6]]
// console.log("default nested array :",nestedArray)
// let flatArray = nestedArray.flat()
// console.log("flatArray",flatArray)


// let nest = [1,2,]


// //array destructuring
// let array = [1,2,3,4,5]
// const[first,second,third] = array
// console.log(first)
// console.log(second)
// console.log(third)


 //array destructuring = skiping  value
// let array1 = [1,2,3,4,5]
// const[first, ,third] = array1
// console.log(first)
// console.log(third)

//rest operator
const num1 = [1,2,3,4,5]
const [fir,second, ...rest] = num1
console.log(fir)
console.log(second)
console.log(rest)






