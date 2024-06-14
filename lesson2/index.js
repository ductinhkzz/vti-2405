var i = 2;

for (var i = 0; i < 5; i++) {
  console.log('=========Loop===================');
  console.log(i);
  console.log('============================');
}

console.log('============================');
console.log(i);
console.log('============================');

let j = 2;

for (let j = 0; j < 5; j++) {
  setTimeout(function timer() {
    console.log('============================');
    console.log(j);
    console.log('============================');
  }, 1000 * j);
}

console.log('============================');
console.log(j);
console.log('============================');

// Clouser function

// counter: memorize, OPP simulator
const counter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counterClouser = counter();

console.log('===========counterClouser=================');
console.log(counterClouser);
console.log('============================');

console.log(counterClouser.value()); // 0.

counterClouser.increment();
counterClouser.increment();
console.log(counterClouser.value()); // 2.

counterClouser.decrement();
console.log(counterClouser.value()); // 1.

//Function factory

function makeExponentiation(x) {
  let exp = x;
  return function (y) {
    return Math.pow(y, exp);
  };
} // y ^ x

const square = makeExponentiation(2);
const sqrt = makeExponentiation(0.5);
const cubeRoot = makeExponentiation(3);

console.log('============================');
console.log(sqrt(4));
console.log('============================');

// var: global scope, function scope, redeclare, can reasign,..
// let: block scope, can reasign
// const: block scope, can not reasign

//Destructuring

//Array
const arr = [1, 2];

const [number1, number2] = arr;
console.log('============================');
console.log(number1, number2);
console.log('============================');

//Can take a center value
const [, number22] = arr;
console.log('============================');
console.log(number22);
console.log('============================');

//Object
const user = {
  id: 1,
  fullName: 'Tinh Le',
};

const { id, fullName } = user;

console.log('============================');
console.log(id, fullName);
console.log('============================');

// Change keys name;
const { id: id1 } = user;

console.log('============================');
console.log(id1);
console.log('============================');

//Template String
console.log('==============Before==============');
console.log('My name is: ' + fullName + ' and my id is: ' + id);
console.log('============================');

console.log('============================');
console.log(`My name is: ${fullName} and my id is: ${id}`);
console.log('============================');

//Operator

//Array

const arr2 = [1, 2, 3, 4, ...arr];
console.log('============arr2================');
console.log(arr2);
console.log('============================');

const user1 = {
  ...user,
};

const user2 = user;
user1.fullName = 'VTI';
console.log('============user================');
console.log(user);
console.log('============================');
console.log('============user1================');
console.log(user1);
console.log('============================');

//Function Constructor

function Person(fullName, age) {
  this.fullName = fullName;
  this.age = age;

  this.getInfo = function () {
    return `My name is ${this.fullName} and age: ${this.age}`;
  };
}

const person = new Person('Tinh Le', 25);
console.log('==============Function Constructor==============');
console.log(person, person.getInfo());
console.log('============================');

//Normal function

//Way1

function normalFunction1() {
  console.log('=============normalFunction1===============');
  console.log();
  console.log('============================');
}

//Way1
const normalFunction2 = function () {
  console.log('=============normalFunction2===============');
  console.log();
  console.log('============================');
};

//Arrow Function

const arrowFunction = () => {
  console.log('=============arrowFunction===============');
  console.log();
  console.log('============================');
};

const calculator = (a, b) => a + b;

const getUserInfo = (fullName) => `My name is ${fullName}`;

// Difference Arrow function and normal function
// -  Arrow functions do not create their own this binding (call, apply, bind)
// - Arrow functions cannot be used as constructors
// - Arrow functions cannot be accessed before initialization (need to create function before call)

const nameObj = {
  name: 'Tony',
};

const PrintName = {
  name: 'steve',
  sayHi: function (method, age) {
    console.log('================PrintName============');
    console.log(method, this.name, age);
    console.log('============================');
  },
};

const bindSayHi = PrintName.sayHi.bind(nameObj);
bindSayHi('bind', 25);

PrintName.sayHi.call(nameObj, 'call', 25);

PrintName.sayHi.apply(nameObj, ['apply', 25]);

// Higher order function

function calculatorInfo(a, b, callback) {
  const result = callback(a, b);
  console.log('=============calculatorInfo===============');
  console.log(result);
  console.log('============================');
}

calculatorInfo(10, 2, (a, b) => a + b);
calculatorInfo(10, 2, (a, b) => a - b);
calculatorInfo(10, 2, (a, b) => a / b);

arr.map((val) => val * 2);
//Reduce Function

const reduceResult = arr2.reduce((pre, curr, index, arr) => {
  console.log('============================');
  console.log(`Index: ${index}, Pre: ${pre}, Curr: ${curr}`);
  console.log('============================');
  return pre + curr;
}, 0);

console.log('===========reduceResult=================');
console.log(reduceResult);
console.log('============================');

// using reduce to group
const data = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'pear' },
  { category: 'vegetable', name: 'spinach' },
];
const resultGroup = data.reduce((pre, curr, index) => {
  console.log('============Group Pre================');
  console.log(pre, curr, index);
  console.log('============================');
  // Get the value of the key for the current object
  const keyValue = curr['category'];

  // If the key value is not already a property of the accumulator object,
  // create an empty array for that key
  if (!pre[keyValue]) {
    pre[keyValue] = [];
  }

  // Push the current object to the array for the corresponding key value
  pre[keyValue].push(curr);

  return pre;
}, {});

console.log('==============resultGroup==============');
console.log(resultGroup);
console.log('============================');

//Currying Function
function multifly(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

const multifly2 = multifly(2);
const multifly24 = multifly2(4);
console.log('=============Currying Function===============');
console.log(multifly24(4));
console.log(multifly24(5));
console.log(multifly24(6));
console.log('============================');
const multifly3 = multifly(3);
const multifly32 = multifly3(2);
console.log('=============Currying Function===============');
console.log(multifly32(4));
console.log(multifly32(5));
console.log(multifly32(6));
console.log('============================');

//Parameter

//Default Parameter
function functionDefaultParameter(a = 5) {
  console.log('=============a===============');
  console.log(a);
  console.log('============================');
}

functionDefaultParameter();

// Rest Parameter

function functionRestParameter(a, b, ...rest) {
  console.log('=============functionRestP arameter===============');
  console.log(a, b, rest);
  console.log('============================');
}

functionRestParameter(1, 2, 3, 4, 5, 6);
