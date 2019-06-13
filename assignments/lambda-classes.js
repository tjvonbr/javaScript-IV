// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
      this.name = attrs.name;
      this.age = attrs.age;
      this.location = attrs.location;
    }
    
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
  };
  
  class Instructor extends Person {
    constructor(instructorAttrs) {
      super(instructorAttrs);
      this.specialty = instructorAttrs.specialty;
      this.favLanguage = instructorAttrs.favLanguage;
      this.catchPhrase = instructorAttrs.catchPhrase;
    }
      
    demo(subject) {
      console.log(`Today we are learning about ${subject}.`);
    }
    
    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
  };
  
  class Student extends Person {
    constructor(studentAttrs) {
      super(studentAttrs);
      this.previousBackground = studentAttrs.previousBackground;
      this.className = studentAttrs.className;
      this.favSubjects = studentAttrs.favSubjects;
      }
    
    listsSubjects() {
      return this.favSubjects.forEach(function(elems) {
        console.log(elems);
      });
    }
    
    PRAssignments(subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    
    sprintChallenge(subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    
  };
  
  class ProjectManager extends Instructor {
    constructor(PMAttrs) {
      super(PMAttrs);
      this.gradClassName = PMAttrs.gradClassName;
      this.favInstructor = PMAttrs.favInstructor;
    }
    
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }
    
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
  };
  
  const trevor = new Student ({
    name: 'Trevor Von Bruenchenhein',
    age: 27,
    location: 'Spring Grove',
    previousBackground:  'Education',
    className: 'Web21',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });
  
  const john = new Instructor ({
    name: 'Jon Doe',
    age: 32,
    location: 'Chicago',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'You\'re an idiot!'
  });
  
  const jane = new ProjectManager ({
    name: 'Jon Doe',
    age: 32,
    location: 'Chicago',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'You\'re an idiot!',
    gradClassName: 'Web18',
    favInstructor: 'John Doe',
  });
  
  trevor.speak();
  john.demo('prototypes');
  john.grade(trevor, 'prototypes');
  trevor.listsSubjects();
  trevor.PRAssignments('prototypes');
  trevor.sprintChallenge('javaScript-IV');
  jane.standUp('web21_ah');
  jane.debugsCode(trevor, 'javaScript-III');