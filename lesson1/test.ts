import { Person } from './modules/Person';
import { Student } from './modules/Student';
import calculateNumber, { HEIGHT_DEVICE } from './modules/constants'; // Normal import

import calculateNumberChangeName, { HEIGHT_DEVICE as HEIGHT_DEVICE1 } from './modules/constants';

calculateNumber(1, 2);
calculateNumberChangeName(2, 3);
console.log('============HEIGHT_DEVICE===========');
console.log(HEIGHT_DEVICE, HEIGHT_DEVICE1);
console.log('=======================');

const fullName: string | number = 'Tinh Le'; // Union Type

// Any

let testAny: any = undefined;
testAny = new Date();
testAny = 'sdasd';

//Enum
enum RoleEnum {
  ADMIN = 'admin',
  DEV = 'dev',
  EDITOR = 'editor',
}

type NameValueType = string | number;

//Object
type UserInfoType = {
  name: string;
  age: number;
  class?: number;
  createAt: Date;
  role: RoleEnum;
};

const userInfo: UserInfoType = {
  name: 'Tinh Le',
  age: 25,
  class: undefined,
  createAt: new Date(),
  role: RoleEnum.ADMIN,
};

/// Array

const arrNumber: number[] = [1, 2, 3, 4, 1, 2, 3]; // way 1
const arrNumber2: Array<number | string> = [1, 2, 3, 't', 'a'];

// Array method

arrNumber.forEach((item) => {
  console.log('==========forEach=============');
  console.log(item);
  console.log('=======================');
});

arrNumber.push(5);

const newMappedArr = arrNumber.map((item) => {
  return item * 2;
});

console.log('==========newMappedArr=============');
console.log(newMappedArr);
console.log('=======================');

// Map

const mapA: Map<string, string> = new Map();

mapA.set('test', 'valTest');
mapA.set('test1', 'valTest1');

console.log('===========mapA============');
console.log(mapA);
console.log('=======================');

console.log('=============Get Value Map==========');
console.log(mapA.get('test'));
console.log('=======================');

console.log('=========Map Has==============');
console.log(mapA.has('test1'));
console.log('=======================');

console.log('=======================');
console.log(mapA.size);
console.log('=======================');

mapA.clear();

console.log('============mapA after clear===========');
console.log(mapA);
console.log('=======================');

// Set
const setA: Set<string> = new Set();

//add
setA.add('a');
setA.add('b');

console.log('===========setA============');
console.log(setA);
console.log('=======================');

console.log('==========ssetA key=============');
console.log(setA.keys());
console.log('=======================');

console.log('==========ssetA value=============');
console.log(setA.values());
console.log('=======================');

setA.add('a');

console.log('==========setA hash=============');
console.log(setA.has('a'));
console.log('=======================');

// apply to remove duplicate in array

console.log('==========current set arr=============');
console.log(new Set(arrNumber));
console.log('=======================');

console.log('===========Set to array============');
console.log([...new Set(arrNumber)]);
console.log('=======================');

// OPP

const person = new Person('Tinh Le', 'English');
person.rollup(1, 2);
console.log('=======================');
console.log(person.language);
console.log('=======================');
person.setName('Tinh Le Duc');
person.getUserInfo();
console.log('========person===============');
console.log(person.getName());
console.log('=======================');

const student = new Student('Van Toan', 'Vietnamese', '2405');

student.getStudentInfo();
student.getUserInfo();
student.rollup(5, 6);

//Generic

type StudentType<T, R> = {
  id: T;
  name: R;
};

const student1: StudentType<string, string> = {
  id: '111',
  name: 'Tinh Le'
};

const student2: StudentType<number, string> = {
  id: 11,
  name: 'Tinh Le'
}

interface IStudent<T, R> {
  id: T;
  name: R;
}


const student3: IStudent<number, string> = {
  id: 11,
  name: 'Tinh Le'
}

class PersonGeneric<T, R = number> {
  protected static count: number = 0;
  private name: T;
  private className: R;
  private id: number;

  constructor(name: T, className: R) {
    this.id = ++PersonGeneric.count;
    this.name = name;
    this.className = className
  }

  getPersonInfo() {
    console.log('===========PersonGeneric============');
    console.log(`Person ID: ${this.id}, Name: ${this.name}, Class: ${this.className}`);
    console.log('=======================');
  }
}

const person1 = new PersonGeneric<string>('Tinh Le', 2405);
person1.getPersonInfo();

function printName<T extends Person>(person: T) {
  person.getUserInfo();
}

printName(person);
printName(student);

/// Data type casting
const age1 : number = 2;

const age2 : string = age1 as unknown as string // way 1
const age3 : string =  <string> <any> age1 // way 2
console.log('==========age2=============');
console.log(age2, age3);
console.log('=======================');