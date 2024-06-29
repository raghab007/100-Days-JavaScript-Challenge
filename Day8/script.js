// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// let openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
//   [`day${2 + 4}`]: {
//     open: 0,
//     close: 24,
//   },
// };
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // openingHours= openingHours,

//   //ES6 enhanced object literals
//   openingHours,

//   // ES6 new feature to write methods
//   orderDelivery({
//     time = '20:00',
//     address = 'Kathmandu',
//     starterIndex = 0,
//     mainIndex = 0,
//   }) {
//     return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
//   },
// };

// restaurant.orderDelivery({
//   time: '8:00 pm',
//   address: 'Kalanki',
//   starterIndex: 2,
//   mainIndex: 3,
// });
// restaurant.orderDelivery({});

// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(numbers);
// let [first, , second] = restaurant.categories;
// console.log(first, second);

// // Swapping values using destructuring arrays
// [second, first] = [first, second];
// console.log(first, second);

// const nested = [1, 2, [3, 4]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [1, 2];
// console.log(p, q, r);

// const aastha = {
//   name: 'Aastha',
//   surname: 'Aryal',
//   age: 19,
//   gender: 'female',
// };

// const { name: aasthaName, surname: aasthaSurname } = aastha;
// console.log(aasthaName, aasthaSurname);

// let x = 20;
// let y = 20;

// const nums = { x: 18, y: 20 };

// let { x: z = 1, t = 2 } = nums;
// console.log(z, t);

// // const { openingHours } = restaurant;
// // const {
// //   fri: { open: Open = 20, close: Close = 8 },
// // } = openingHours;
// // console.log(Open, Close);

// // Rest operator
// // Spread , because on the RIGHT side of the operator
// const arr = [1, 2, ...[3, 4]];

// // Rest, because on the LEFT side of the operator
// const [f, g, ...remaining] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(f, g, remaining);

// //====================================
// // // Spread operator
// // const arr = [4, 5, 6];
// // const newArray = [1, 2, 3, ...arr]; // This spread operator will unpack all the elements from the array
// // console.log(newArray);
// // console.log(...newArray);
// // // Something hehe
// // const array = [1, 2, 3, arr];
// // array[3][0] = 10;
// // console.log(arr);

// // const newMenu = [
// //   ...restaurant.mainMenu,
// //   'Momo',
// //   'Ramen',
// //   'Yomari',
// //   'Bubble-Tea',
// // ];
// // restaurant.mainMenu = newMenu;
// // console.log(restaurant.mainMenu);

// // // Note Destructuring and spread operators are similar but the main  difference is through Destructuring we can store in variable but thorugh spread operator we can only unpack elements

// // // Join two arrays using spread operator
// // const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(allMenu);

// // //Iterables : arrays, strings, maps, sets .Not objects
// // const str = 'Raghab';
// // console.log(...str);
// // const strArray = [...str];
// // console.log(...strArray);

// // //console.log(`${...str}`); This will not work

// // //Objects
// // const newResturant = {
// //   ...restaurant,
// //   founder: 'raghab.',
// //   co_founder: 'aastha aryal',
// // };
// // console.log(newResturant);

// // // Object copy
// // const restaurantCopy = { ...restaurant };

// // // Use cases of spread operator
// // // Passing multiple values into the function
// // // Unpacking or copying arrays or objects

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// };

// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function something(a, b, c) {
//   console.log(a, b, c);
// }

// something(...[1, 2, 3]); // This will print 1,2,3

// const nameArray = ['Aastha', 'Raghab', 'Sudarshan', 'Mina', 'Nirajan'];
// for (const [num, name] of nameArray.entries()) {
//   console.log(`${num + 1} : ${name}`);
// }

// // undefined and null are falsy value for Nullish Coelassing operator
// let Name;
// Name = Name ?? 'Ananta';
// console.log(Name);

// console.log(restaurant);

// function helloworld() {
//   return 'Hello World';
// }

// console.log(
//   restaurant.orderDelivery?.({
//     time: '8:00 pm',
//     address: 'Kalanki',
//     starterIndex: 2,
//     mainIndex: 2,
//   }) ?? 'Method does not exist'
// );

// const users = [
//   { name: 'raghab', age: 20, address: 'Kathmandu' },
//   { name: 'Aastha', age: 19, address: 'Kathmandu' },
// ];
// console.log(users[0]?.name ?? 'user doesnot exists');

// // All the falsy  values are falsey values for || and && operator

// //  and ?? are similar but null and undefined are only nullish values for nullish coelasing operator !

// const me = {
//   firstName: 'Ananta',
//   lastName: 'Pokhrel',
//   she: 'Aastha Aryal',
//   father: 'Sudarshan',
//   mother: 'Mina',
//   brother: 'Nirajan',
//   age: 20,
// };
// console.log(Object.entries(me));
// for (const [key, value] of Object.entries(me)) {
//   console.log('Key: ', key, 'Value: ', value);
// }

// Obect.values() gives an array of values
// Object.keys() gives an array of keys or properties
// Object.entries() gives an array of keys and properties

//============================================================
//=================Challenge 1=========================
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.players;
// const [gk, ...others] = player1;
// const allPlayers = [...player1, ...player2];
// const players1Final = [...allPlayers, 'Thiago', 'Coutinho', 'Perisic'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   let sum = ` ${players.length} number of goals were in the team:`;
//   for (const player of players) {
//     sum = sum + player + ', ';
//   }
//   console.log(sum);
// };

// printGoals('aastha', 'raghab', 'niorj', 'avas');

// console.log(
//   (team1 < team2 && 'Team 1 is more likely to win') ||
//     'Team 2 is more likely to win '
// );

// // =================Challenge 2 ===========================
// let i = 1;
// for (const player of game.scored) {
//   console.log(`Goal ${i} : ${player} `);
//   i++;
// }
// let totalOdd = 0;
// for (const odd of Object.values(game.odds)) {
//   totalOdd += odd;
// }
// const averageOdd = totalOdd / Object.values(game.odds).length;
// console.log(`The average odd of the game is ${averageOdd}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`The odd of victory ${game[team] ?? 'draw'}: ${odd}`);
// }

// console.log(`The odd of victory  ${game['team1']}: ${game.odds['team1']} `);
// console.log(`The odd of draw: ${game.odds.x}`);
// console.log(`The odd of victory ${game['team2']}: ${game.odds['team2']}`);

// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2,
// };

// ==================SETS ================
const fruits = [
  'mango',
  'apple',
  'mango',
  'apple',
  'banana',
  'banana',
  'grapes',
  'watermelon',
];
// console.log(fruits);
// console.log(fruits.has('orange'));
// console.log(fruits.has('apple'));
// fruits.add('dragon fruit');
// fruits.add('avocado');
// console.log(fruits);
// fruits.delete('apple');
// console.log(fruits);
// console.log(fruits.size); // gives size of a set
// //foods.clear();
for (const fruit of fruits) {
  console.log(fruit);
}

const uniqueFoods = [...new Set(fruits)];
console.log(uniqueFoods);
console.log(new Set('Raghab'));
//////////////////////////////================////////
///================Maps===========
//===
//===
//=
// WE can use any data type as key in maps .
const maps = new Map();
maps.set('name', 'raghab');
maps
  .set('age', 20)
  .set('id', '22067893')
  .set('college', 'islington')
  .set([1, 2], 'array');
console.log(maps);
// .set method returns the new updated map
console.log(maps.get('name'));
console.log(maps.get('age'));
console.log(maps.get(1));
console.log(maps.has('name'));
console.log(maps.delete('id'));
console.log(maps.get([1, 2])); // This will give undefined since array is an object

// == We can convert am object to a map
// i forgot that we cannot use number as key in object
const raghab = {
  name: 'raghab',
  surname: 'pokhrel',
  age: 20,
  father: 'sudarshan',
  mother: 'mina',
  1: 'java',
  2: 'javaScript',
  3: 'Python',
  4: 'C#',
};

const raghabMap = new Map(Object.entries(raghab));
console.log(raghabMap);

for (const [key, value] of raghabMap) {
  //if (typeof key === 'number') {
  console.log(`${key}: ${value}`);
  // }
}

// =========== Challenge 3 ==========//=
//===
//===
//===
//===
//===
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//console.log([...gameEvents.values()]);
const events = [...new Set([gameEvents.values()])];
console.log(events);
//onsole.log([...new Set(['raghab', 'raghab', 'aastha', 'aastha', 'nirajan'])]);
//gameEvents.delete(64);
//////
/////
/////
//////
//////
//////
/////
////
////
////
////
////
//= = = = == =  Working with strings //====

// Strings are iterable and we can also get value using indexes
// for (const str of 'Raghab') {
//   console.log(str);
// }

const Name = 'Raghab';

for (let i = 0; i < Name.length; i++) {
  console.log(Name[i]);
}
console.log(Name.indexOf('r'));
console.log(Name.lastIndexOf('a'));
console.log(Name.indexOf('z'));

const job = '  I am a programmer 🥲   ';
console.log(job);
console.log(job.slice(7));
console.log(job.slice(7, 17));
console.log(job.slice(-2));
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name);

const hey = job.trim(); // this method removes all the starting  and ending spaces and
console.log(hey);

function emailChecker(email, anotherEmail) {
  anotherEmail = anotherEmail.toLowerCase().trim();
  if (anotherEmail === email) {
    return true;
  }
  return false;
}

console.log(emailChecker('raghab@gmail.com', '    rAghAB@gmAil.com     '));

const herName = 'Aastha Aryal';
const herNewName = herName.replace('Aryal', 'Pokhrel');
console.log(herNewName);

const repeated = 'raghab raghab raghab raghab';
console.log(repeated.replace(/raghab/g, 'ananta'));
//console.log(repeated.replaceAll('raghab', 'ananta'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('neo'));
console.log(plane.startsWith('neo'));
console.log(plane.startsWith('A320'));

// pratice exercise
const checkBaggage = function (items) {
  items = items.toLowerCase();
  if (
    items.includes('gun') ||
    items.includes('knife') ||
    items.includes('bomb')
  ) {
    console.log('You are not allowed on board!');
  } else {
    console.log('Welcome board');
  }
};
checkBaggage('i have gun knife');
checkBaggage('i have clothes and foods only');

const array = herName.split('');
console.log(array);

// Spilit and join.
const fullName = 'Raghab Pokhrel';
const [firstName, lastName] = fullName.split(' ');
console.log(firstName, lastName);
const newName = ['Mr.', 'Raghab', 'Pokhrel'.toUpperCase()].join(' ');
console.log(newName);

function capitalizeName(fullName) {
  const names = fullName.split(' ');
  const newName = [];
  for (const name of names) {
    // newName.push(name.replace(name[0], name[0].toUpperCase()));
    newName.push(name[0].toUpperCase() + name.slice(1));
  }
  console.log(newName.join(' '));
}

capitalizeName('aastha aryal');
capitalizeName('raghab pokhrel');
capitalizeName('nirajan pokhrel');

// padding
console.log('raghab'.padStart(15, '*').padEnd('23', '*'));
console.log('raghab... '.repeat(5)); // Repeats the string

const carsInLine = function (numberOfCars) {
  console.log(
    `There are ${numberOfCars} cars in line ${'🚗'.repeat(numberOfCars)}`
  );
};
carsInLine(5);
carsInLine(10);

// function camelCase(underscore_case) {
//   const underScoreIndex = underscore_case.indexOf('_');
//   let camelCaseString = underscore_case.replace(
//     underscore_case[underScoreIndex + 1],
//     underscore_case[underScoreIndex + 1].toUpperCase()
//   );
//   camelCaseString = camelCaseString
//     .replace('_', '')
//     .replace(camelCaseString[0], camelCaseString[0].toLowerCase());

//   console.log(camelCaseString);
// }

// camelCase('Raghab_pokhrel');

// function camelCase(...underscore_case) {
//   const camelCase = [];
//   for (let str of underscore_case) {
//     const Index = str.indexOf('_') + 1;
//     str = str
//       .replace(str[Index], str[Index].toUpperCase())
//       .replace('_', '')
//       .replace(str[0], str[0].toLowerCase());
//     camelCase.push(str);
//   }
//   console.log(camelCase);
// }

// camelCase(
//   'raghab_pokhrel',
//   'mina_pokhrel',
//   'sudarshan_pokhrel',
//   'nirajan_pokhrel',
//   'aastha_aryal'
// );

// Finally challenge completed hehe
function camelCase(underscore_case) {
  try {
    console.log(underscore_case);
    underscore_case = underscore_case.split('\n');
    console.log(underscore_case);
    const camelCase = [];
    let i = 1;
    for (let str of underscore_case) {
      str = str.toLowerCase();
      str = str.split('_');

      str =
        // Instead of this we can also use array destructuring here!
        (
          str[0].replace(str[0][0], str[0][0].toLowerCase()) +
          str[1].replace(str[1][0], str[1][0].toUpperCase())
        ).trim();
      str = str.padEnd(20, ' ') + '🔫'.repeat(i);
      camelCase.push(str);
      i++;
    }
    for (const string of camelCase) {
      console.log(string);
    }
  } catch (E) {
    console.log('Empty text field');
  }
}
// camelCase(
//   'raghab_pokhrel',
//   'aastha_aryal',
//   'mina_pokhrel',
//   'sudarshan_pokhrel',
//   'nirajan_pokhrel'
// );
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');
button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  camelCase(text);
});
