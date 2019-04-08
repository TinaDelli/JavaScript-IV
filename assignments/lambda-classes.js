// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
      this.name = attrs.name;
      this.age = attrs.age;
      this.location = attrs.location;
      this.gender = attrs.gender;
    }
    // Methods
    speak() {
      return `Hello my name is ${this.name}, and I am from ${this.location}`;
    }

  }// Person

  class Instructor extends Person{
    constructor(instructorAttrs){
     super(instructorAttrs);
     this.specialty = instructorAttrs.specialty;
     this.favLanguage = instructorAttrs.favLanguage;
     this.catchPhrase = instructorAttrs.catchPhrase;
    }
    // Methods
    demo(subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    tallyScores(student){
        return Math.floor(Math.random() * Math.floor(student.grade));
    
    } //stretch
  }//Instructor

  class Student extends Person{
    constructor(studentAttrs){
     super(studentAttrs);
     this.previousBackground = studentAttrs.previousBackground; 
     this.className = studentAttrs.className;
     this.favSubjects = studentAttrs.favSubjects
     this.grade=studentAttrs.grade //stretch
    }
    // Methods
    listsSubjects() {
      console.log(...this.favSubjects);
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate (instructor){
        if ((instructor.tallyScores(this) > 70)) {
            return `Congratulations! ${this.name} has graduated!`
        } else {
            return `${this.name} did not get a high enough score..try again!`
        }
    }
  }//Student

  class ProjectManager extends Instructor{
    constructor(pmAttrs){
     super(pmAttrs);
     this.gradClassName = pmAttrs.gradClassName;
     this.favInstructor = pmAttrs.favInstructor;
    }
    // Methods
    standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
  }//Project Manager

//Objects
const odell = new Instructor({
    name: 'Odell Beckham',
    location: 'Cleveland',
    age: 26,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Gotta one hand catch those bugs!`
  });

  const tony = new Instructor({
    name: 'Tony',
    location: 'Roma',
    age: 37,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Gotta make those objects before those classes bruh`
  });

  const danica = new Student({
    name: 'Danica',
    location: 'Harrisburg',
    age: 25,
    gender: 'female',
    previousBackground: 'art major',
    className: 'UX3',
    favSubjects: 'CSS, Design, Ruby',
    grade:100,
  });

  const nancy = new Student({
    name: 'Fancy Nancy',
    location: 'Paris',
    age: 19,
    gender: 'female',
    previousBackground: 'linguistics',
    className: 'Web19',
    favSubjects: 'HTML, JavaScript, React',
    grade: 100,
  });

  const dave = new Student({
    name: 'Dave Maxwell',
    location: 'Anaheim',
    age: 27,
    gender: 'male',
    previousBackground: 'business',
    className: 'Web18',
    favSubjects: 'Python, React, JavaScript',
    grade: 100,
  });

  const jared = new ProjectManager({
    name: 'Jared Pixar',
    location: 'Los Angeles',
    age: 37,
    gender: 'male',
   gradClassName: 'CS02',
   favInstructor: 'Odell Beckham'
  });

  
  const sam = new ProjectManager({
    name: 'Sam Nelson',
    location: 'Long Island',
    age: 32,
    gender: 'male',
    gradClassName: 'CS04',
   favInstructor: 'Tony Roma'
  });

//Logs  
console.log(odell.speak());
console.log(tony.demo("CSS"));
console.log(odell.grade(nancy, "React"));
console.log(danica.listsSubjects());
console.log(nancy.PRAssignment("JavaScript"));
console.log(dave.sprintChallenge("HTML"))
console.log(jared.standUp("squad channel"));
console.log(sam.debugsCode(dave, "JavaScript"));
//Stretch
console.log(odell.tallyScores(danica)); //stretch for instructor grading 
console.log(danica.graduate(odell)); //stretch for student graduation
console.log(nancy.graduate(tony)); //stretch
console.log(dave.graduate(odell)); //stretch