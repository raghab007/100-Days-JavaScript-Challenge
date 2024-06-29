'use strict';

const raghab = {
  firstName: 'raghab',
  lastName: 'pokhrel',
  age: 20,
  friends: ['niroj', 'pemba'],
};

function pushFriends(name) {
  this.friends.push(name);
}

pushFriends.call(raghab, 'avas');
pushFriends.call(raghab, 'alish');
console.log(raghab);

const pushRaghab = pushFriends.bind(raghab, 'aastha');
pushRaghab();
pushRaghab();
pushRaghab();
console.log(raghab);
console.log(pushRaghab);

// const addTax = rate => {
//   return function (value) {
//     return value + rate * value;
//   };
// };

// const addVat = addTax(0.13);
// console.log(addVat(20000));
// USinf bind

function addTax(rate, value) {
  return value + value * rate;
}

const addVat = addTax.bind(null, 0.13);
console.log(addVat(20000));

/////====================Challenge 1 =============/////////
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let question = prompt(
      `${this.question}\n${this.options.join('\n')}\n(write option number )`
    );

    //question = question === null ? null : Number(question);

    //console.log(question);

    //stypeof question =='number'

    // if (question == NaN || question >= this.answers.length) {
    //   alert('enter valid number ');
    // } else {
    //   this.answers[question] += 1;
    // }
    typeof question === 'number' &&
      question < this.answers.length &&
      this.answers[question]++;
    console.log(this.answers);
    //this.displayResults('string');
    // console.log(this);
  },
  displayResults: function (type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type == 'string') {
      console.log(`0:JavaScript 1:Python 2:Rust 3:C++`);
      console.log(`Poll resutls are ${this.answers.join(' ')}`);
    }
  },
};

//poll.registerNewAnswer();
//console.log(poll);
const registerNewAnswer = poll.registerNewAnswer;

const pollButton = document.querySelector('.poll');
pollButton.addEventListener('click', registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

//const displayResults = poll.displayResults;

//displayResults.call(data1);
//displayResults.call(data1, 'string');
//displayResults(data2);
//displayResults(data2, 'string');

poll.displayResults.call({ answers: data1 }, 'string');
poll.displayResults.call({ answers: data2 }, 'string');

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE
(function () {
  console.log('This is immediatelt invoked function expressions !');
})();

/// CLosure example
function number() {
  let number = 0;
  return function () {
    console.log('Number: ', (number += 2));
  };
}

const printEvenNumbers = number();

for (let i = 1; i <= 10; i++) {
  printEvenNumbers();
}

// Closure example 2

let f;

const a = function () {
  const number = 20;
  f = function () {
    console.log('The number is : ', number);
  };
};
a();
f();

const b = function () {
  const number = 20 + 5;
  f = function () {
    console.log('The number is: ', number);
  };
};
b();
f();

/////=======>>>>>>>> Coding challenge <<<<<<<<<<============ ///////
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
