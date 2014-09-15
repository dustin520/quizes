var Person = function(name, height, age, sleeping) {
  this.name = name;
  this.height = height;
  this.age = age;
  this.sleeping = false;

};

Person.prototype.eat = function () {
  var noise = "chomp"
  return noise
  console.log("eating noise: " + noise);
};

Person.prototype.sleep = function () {
  if(this.sleeping === false) {
    return this.sleeping = true; 
    console.log("status: " + this.sleeping);   
  } else {
    console.log(this.name + " is already sleeping.");
  }
};

Person.prototype.wakeUp = function() {
  if(this.sleeping === true) {
    return this.sleeping = false;
  } else {
  console.log(this.name + " is already awake.");
  }
};

var dustin = new Student("")
dustin.name = "dustin"

var Student = function(name, height, age, sleeping, studying) {
  this.studying = false; 

}

// Student.prototype = Object.create(Person.prototype); // not sure if this is right or just the old way 

Student.prototype = new Person()
Student.prototype.constructor = Student;


Student.prototype.study = function() {
  if (this.studying === false) { 
    this.studying = true; 
    console.log("status: " + this.studying)
  } else {
    console.log(this.name + " is studying already.")
  }
}

Student.prototype.stopStudy = function() {
  this.studying = false; 
  console.log("status: " + this.studying)
}

Student.prototype.sleep = function() {
  if(this.studying === false) {
    this.sleeping = true;
    console.log(this.student + " has just fallen asleep.")
  } else {
    this.sleeping = false;
    console.log(this.student + " is studying, can't sleep yet!")
  }
}


var Dustin = new Person("Dustin", "5ft8in", 25, false)
var Randall = new Student("Randall", "n/a", 25, false, false)

