import { IWork } from './IWork';

export class Person implements IWork {
  static count: number = 0;
  protected id: number;
  private name: string;

  language: string;

  constructor(name: string, language: string) {
    this.name = name;
    this.id = ++Person.count;
    this.language = language;
  }

  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }

  getUserInfo() {
    console.log('=======================');
    console.log(`Current user ID: ${this.id} and name: ${this.name}`);
    console.log('=======================');
  }

  rollup(a: number, b: number) {
    console.log('==========rollup Method=============');
    console.log(a + b);
    console.log('=======================');
  }
}
