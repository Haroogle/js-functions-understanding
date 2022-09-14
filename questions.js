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
//function myFunction(num, num1) {
 //   console.log(num1)
//}
//let num = 10
//let num1 = 2
//const result = myFunction(num)
//console.log(result)
// we think that it will log undefined as the function has not been given two values
//we were right
//Q6
//function myFunction(num, num1) {
  /// console.log(num1)
//}
///let num = 10
//let num1 = 2
//myFunction(num1,num)

// we think the value will be logged inside the function
// 10 as the second value given.
// We were right
//Q7
//let counter = 1
//function myFunction(){
   //counter++
   //return counter
//}
//myFunction()
//const num = myFunction()
//console.log(counter)
// we think the value of counter will be 3 as myFunction runs three times.
// we were right
//Q8
//function myFunction(num1, num2){
   //return num1 + num2
//}
//const num1 = 10
//const num2 = 1
//const num3 = 4
//const result = myFunction(num3, num1)
//console.log(result)
// we think the result will be 14 as myFunction has been called to add the value given.
// we wee right
//Q9
//function myFunction(num1, num2) {
   //console.log(num3)
//}
//const num1 = 10
//const num2 = 1
//const num3 = 20
//myFunction(num3, num1)
//console.log(myFunction)
// we think it will return 'undfined' when runs the code as the arguments num3 has not been defined in myFunction
//we were wrong as the value of num3 has not been defined within the function but took it from the variable named num3 instead
//Q10
//function myFunction(num1, num2, num3){
   //console.log(num3)
//}
//const num1 = 10
//const num2 = 1
//const num3 = 20
//myFunction(num3, num1 , 100)
//console.log(myFunction)
// 100 will be logged out on the console when this code runs as num3 has been called and the value is 100 within the function myFunction
// we were right