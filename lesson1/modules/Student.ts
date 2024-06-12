import { Person } from './Person';

export class Student extends Person {
  private className: string;

  constructor(name: string, language: string, className: string) {
    super(name, language);
    this.className = className;
  }

  /**
   * Public method getStudentInfo (overload)
   */

  getStudentInfo() {
    console.log('=======================');
    console.log(`Student ID: ${this.id}, Name: ${this.getName()}, Class Name: ${this.className}`);
    console.log('=======================');
  }

  /**
   * Override getUserInfo of Person
   */

  getUserInfo(): void {
    console.log('=======================');
    console.log('Student Override method getUserInfo');
    console.log('=======================');
  }
}