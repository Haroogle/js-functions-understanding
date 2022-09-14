//Q1
//function myFunction(num1, num2) {
   // return num1+num2
//}
//const result = myFunction(5,5)
//The value of result will be 10 because the arguments
//num1 and num2 have been called by the return within the function to add together
//we were right

//Q2
//function myFunction(num1, num2) {
   // num1+num2
//}
//const result = myFunction(5,5)
//We think that the result will give undefined or NaN
//As the function has not been told told to return num1+num2 
//console.log(result)
//We were right it returned the value undefined

//Q3
//function myFunction(num) {
    //return num-1
//}
//let num = 10
//num = myFunction(num)
//num = myFunction(num)
// we think num wil be 8, as num was defined as 10 then run through
// the function twice, taking away one eact time
//console.log(num)
//We were right

//Q4
//function myFunction(num) {
   // return num-1
//}
//let num = 10
//let add = 3
//add = myFunction(add)
//add = myFunction(add)
//num will be 10 and add will be 1 as this shows only 
// add going through the function (twice)not the variable num
//console.log(num)
//console.log(add)
//We were right

//Q5
function myFunction(num, num1) {
    console.log(num1)
}
let num = 10
let num1 = 2
const result = myFunction(num)
console.log(result)
// we think that it will log undefined as the function has not been given two values
//we were right