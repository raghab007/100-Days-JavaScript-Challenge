// function raghab(){

//     let name  = 'aastha';

// }
// let = 'sudarshan';
// console.log(name);

// // var is function scoped
// // let is block scoped
// // type of is an operator that is used to find the data type of variable
// /* Write your code below. Good luck! 🙂 */
// // challenge no 1
// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const BMIMark = massMark/(heightMark*heightMark);
// const BMIJohn = massJohn/(heightJohn*heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);
// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);
// console.log(`
// Mina Pokhrel
// Sudarshan pokhrel
// Aastha Aryal
// Nirajan Pokhrel
// Ananta Pokhrel
// `
// )
// // In multiple lines
// console.log(
// 'Mina pokhrel \n\
// Sudarshan Pokhrel \n\
// '
// )

// // Type conversion
// const number = '2020';
// // This number function will give number if there is number in string otherwise it will give Na
// console.log(Number(number))
// const NotaNumber = 'raghab';
// // This will give not a number
// console.log(NotaNumber);

// const num = 20;
// // This string function returns string value of 20
// const string = String(num);
// console.log(string)

// // Type coercion
// console.log('I am '+ 20+'years old'); // This + plus operator converts number to string whenever there is operation between string and the

// console.log('10'-'5'-3);// This will give number in output..'-' operator works as opposite like plus operator..!
// console.log('23'*'2') // ==> 46
// console.log('23'/'2') //==> 11.5ß

// // Falsy values in JavaScript
// // 1. 0
// // 2. ''
// // 3. Null
// // 4. undefined
// // 5. Nan
// // ==> Other than this values are truthy values in JavaScript
// console.log(Boolean(0)) //==> false
// console.log(Boolean('')) //==>
// console.log(Boolean(undefined)) //==> false
// console.log(Boolean(null)) // ==> false
// console.log(Boolean(NaN)) // ==> false

// // Truthy values
// console.log(Boolean(10))
// console.log(Boolean('Aastha'))
// console.log(Boolean(false))

// const money = 0;
// if(money){ // This will give falsy value
//     console.log('Well we can have party tonight');
// }
// else{
//     console.log('You should get a job!');
// }

// let age ;
// if(age){
//     console.log('Age is defined');
// }
// else{
//     console.log('Age is not defined');
// }

// //Switch statement
// const  day  = prompt('What is the day today ?');
// switch(day){
//     case 'sunday': console.log('sunday');break; //day==='sunday'
//     case 'monday': console.log('monday');break;
//     case 'tuesday': console.log('tuesday');break;
//     case 'wednesday':console.log('wednesday');break;
//     case 'thursday':console.log('thursday');break;
//     case 'friday':console.log('friday');break;
//     case 'saturday':console.log('saturday');break;
//     default:console.log('Not a valid day!');
// }

// //Using if else statement
// if(day==='sunday'){
//     console.log('Hurray its sunday');
// }
// else if(day==='monday'){
//     console.log('Its monday');
// }
// else if(day==='tuesday'){
//     console.log('Its tuesday');
// }else if(day==='wednesday'){
//     console.log('Its wednesday');
// }else if(day==='thursday'){
//     console.log('Its thursday');
// }else if(day ==='friday'){
//     console.log('Its friday');
// }else if (day==='saturday'){
//     console.log('Its saturday')
// }else{
//     console.log('Not a valid day');
// }

// const Age  = 20;
// const IsTeenager = Age>18? false:true;
// console.log(IsTeenager);

// console.log(`I like to drink ${Age>=18?'Wine':'Water'}`);
"use strict";

const func = function () {
  var a = 10;
};
console.log(a);
