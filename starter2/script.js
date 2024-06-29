// // Function declaration

// // The function declaration can be called even before declaring it.
// const c = sum1(5,6);
// console.log(c)

// function sum1(a,b){
//     return a+b;
// }

// //const d = sum2(5+6); function expresion cannot be called before initialization
// // function expression
// const sum2 = function(a,b){
//     return a+b;
// }
// const a = sum1(5,6);
// const b = sum2(5,6);
// console.log(a,b);

// // Arrow function
// const calcAge = birthYear =>  2080-birthYear;
// console.log(calcAge(2060));
// console.log(calcAge(2061))

// const calcRetirementAge  = (birthYear,firstName)=>{
//     const age = 2024-birthYear;
//     const retirement = 60-age;
//     return `${firstName} retires in ${retirement} years`; // When we have more than one line of code in arrow function then we have to explicitly return value
// }

// console.log(calcRetirementAge(2004,'Raghab Pokrel'));

// //Arrays
// const array = [1,2,3,4,5];
// const anotherArray = new Array(1,2,3,4,5);

// console.log(array);
// console.log(anotherArray);
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
//     console.log(anotherArray[i]);
// }

// let array3 = [1,2,3,4];
// console.log(array3)
// array3 = ['Raghab','Aastha','Mina'];
// console.log(array3);

// const family = ['nirajan','mina','sudarshan','raghab'];
// const newLength = family.push('aastha');
// family.push('new member1') //this push method returns the new length of the array
// family.unshift('new member');
// console.log(family);

// // remove elements
// console.log(family.pop()) // removes  last element and returns the removed element

// family.shift() // removes the first element from the array
// console.log(family.indexOf('aastha'));
// console.log(family.includes('aastha'));

// if(family.includes('aastha')){

//     console.log('Congratulations for being our family member');

// }

// // Objects
// // Data are stored in key value pairs in JavaScript
// const raghab = {
//     firstName:'raghab',
//     lastName:'pokhrel',
//     age:20,
//     friends:['Niroj','Alish', 'Avas','Ankush'],
//     family:['aastha','nirajan','mina','sudarshan']

// }
// console.log(raghab.family);
// console.log(raghab.lastName);

// const hello = function(){
//     console.log('Hello world');
// }

// function helloWorld(a){
//     a();
// }

// helloWorld(hello);

// // Function returning a function
// const  makeBetweenFunc = function(min, max){
//     return function(num){

//         return num>=min && num<=max;
//     }
// }

// const funcBetween1 = makeBetweenFunc(50,100);
// console.log(funcBetween1(70));

/*
const aastha = {
    firstName: "Aastha",
    lastName: "Aryal",
    age: 19,
    talk: function () {
        return "She talks a lot 😛";
    }
}

aastha.home = "gulmi";
aastha['brotherName'] = "aadarsha"
let loop = true
while (loop == true) {

    let property = prompt("What do you want to know firstName, lastName, age, talk");
    console.log(aastha[property]);
    while (true) {
        let askAgain = prompt("Want other details? ")
        if (askAgain == "yes") {
            loop = true;
            break;
        }
        else if (askAgain == "no") {

            loop = false;
            break;


        } else {
            askAgain = prompt("Enter valid input");

        }

    }
}
*/

const raghab = {
  firstName: "raghab",
  lastName: "pokhrel",
  bestFriend: "Aastha",
  girlFriend: "Aastha",
  friends: ["Niroj", "Alis", "Pemba", "Avas", "Ankush"],
  birthYear: 2060,
  hasDriverLicense: false,
  // calcAge: function () {
  //     console.log(this)
  //     return 2080 - this.birthYear;

  // }
  caclAge: function () {
    this.age = 2080 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.caclAge()} old student, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver license`;
  },
};

console.log(raghab.caclAge());
console.log(raghab.age);
console.log(raghab.age);
console.log(raghab.age);
console.log(raghab.getSummary());

// Challenge no.3
// const mark = {
//     fullName:"Mark Miller",
//     mass:78,
//     height:1.69,
//     calcBMI:function(){
//         this.bmi = this.mass/(this.height*this.height)
//         return this.bmi;
//     }
// }

// const john = {
//     fullName:"John Smith",
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         this.bmi = this.mass/(this.height*this.height);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// if(mark.bmi>john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// }else if(john.bmi>mark.bmi){
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
// }

//Looping
for (let i = 1; i <= 10; i++) {
  console.log(`Running step ${i}`);
}

// Iterating in array , break and continue keyword in javascript
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (let i = 0; i < evenNumbers.length; i++) {
  if (evenNumbers[i] == 8) continue;
  console.log("Number: " + evenNumbers[i]);

  if (evenNumbers[i] == 14) break;
}

const ananta = [
  "raghab",
  "pokhrel",
  20,
  ["Niroj", "Alis", "Pemba", "Avas", "Ankush"],
];
const types = [];
for (let i = 0; i < ananta.length; i++) {
  console.log(ananta[i], typeof ananta[i]);
  types.push(typeof ananta[i]);
}

console.log(types);

// const hello = [];
// hello[2] = 3
// console.log(hello)
// console.log(hello[4])

const birthYeah = [2050, 2060, 2070, 2075, 2065];
const Ages = [];
for (let i = 0; i <= birthYeah.length - 1; i++) {
  Ages.push(2080 - birthYeah[i]);
}
console.log(Ages);

//looping backwards
const numbers = [1, 2, 3, 4, 5, 6];
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log("Number: " + numbers[i]);
}

// Nested loop
console.log("Printing Numbers in nested array");
const nestedArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

for (let i = 0; i <= nestedArray.length - 1; i++) {
  for (let j = 0; j <= nestedArray[i].length - 1; j++) {
    console.log("Nested Array Numbers:" + nestedArray[i][j]);
  }
}

let i = 1;
while (i <= 100) {
  console.log(`Study JavaScript Day ${i}`);
  i++;
  console.log("Random Number: " + Math.trunc(Math.random() * 6 + 1));
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`Finally you rolled ${dice}`);

if (true) {
  var alis = "alis";
  console.log(alis);
}

console.log(alis);
function helloWorold() {
  var avas = "avas";
}
console.log(avas);
