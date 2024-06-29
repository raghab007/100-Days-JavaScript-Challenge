'use strict';
const raghab = {
  name: 'Raghab',
  age: 20,
  friends: ['aastha', 'niroj', 'alish', 'pemba'],
  greeting: function () {
    console.log(
      `Hey this is ${this.name} and my good friend is ${this.friends[0]}`
    );
  },
};

raghab.greeting();

const aastha = {
  name: 'aastha',
  age: 19,
  friends: ['raghab', 'aadarsha'],
  greeting: function () {
    console.log('Namaste');
    console.log(this);
    // solution 1
    // const self = this;
    // function hello() {
    //   console.log('hello');
    //   console.log(self);
    // }

    // solution 2. Since arrow function doesnot have its this keyword. It will get from the parent function i.e method
    const hello = () => {
      console.log(this);
    };
    hello();
  },
};

//aastha.greeting = raghab.greeting;
//aastha.greeting();
aastha.greeting();

function hello() {
  console.log(this);
}
//hello();

// Copying objects
const newRaghab = Object.assign({}, raghab);
