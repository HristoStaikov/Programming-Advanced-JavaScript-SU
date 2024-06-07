function toStringExtension() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    toString() {
      return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
    toString() {
      return `${super.toString().substring(0, super.toString().length - 1)}, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }
    toString() {
      return `${super.toString().replace(")", "")}, course: ${this.course})`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}

let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Student("Pesho", "Pesho@pesh.com", "3");
console.log(p.toString());
// let { Person, Teacher, Student } = toStringExtension();
// let p = new Student("Pesho", 'Pesho@pesh.com', "3");
// console.log(p.toString());
