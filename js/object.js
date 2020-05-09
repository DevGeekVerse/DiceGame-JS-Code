//Constructors

var john = {
    name: 'John',
    yearOfBirth: 1997,
    job: 'designer'
};

//Funtion Contructors
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = "Smith";

var john = new Person('John', 1997, 'designer');

var jane = new Person('Jane', 1998, 'driver');

var mark = new Person('Mark', 1965, 'retired');

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

john.calculateAge();
jane.calculateAge();
mark.calculateAge();