//   var firstName = 'John';
//   console.log(firstName);

//   var lastname = 'Smith';
//   var age = 25;

//   var fullAge = false;

//   var job, isMarried;
//   job = 'Teacher';
//   isMarried = false;

//   console.log(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);

//   //variable mutation
//   age = 'twenty eight';

//   job = 'Driver';
//   alert(firstName + ' is a ' + age + ' year old ' + job + '.Is he married? ' + isMarried);

//   var lastName = prompt('What is his last Name?');
//   console.log(firstName + ' ' + lastName);


/**
 * Basic Operators
 *  
 */
// var year, yearJohn, yearMark;
// year = 2020;
// yearJohn = year - 28;
// yearMark = year - 33;
// console.log(yearJohn);
// console.log(yearJohn + 2);
// console.log(yearJohn * 2);
// console.log(yearJohn / 2);

//Logical Operators
// var johnOlder = yearJohn < yearMark;
// console.log(johnOlder);


//typeOf Operator
// console.log(typeof johnOlder);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);


//Operator Precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

//Multiple Operators
// var isFullAge = (now - yearJohn) >= fullAge;
// console.log(isFullAge);


//Grouping
// var johnAge = now - yearJohn;
// var markAge = 35;
// var average = (johnAge + markAge) / 2;
// console.log(average);

//Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 -> 32 - 6 ->26
// console.log(x, y);

//More Operators
// x = x * 2; //as 
// x *= 2;
// console.log(x);

// x += 10;
// console.log(x);

// x++;
// console.log(x);

//Coding challenge.

/*
var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);


var markHigherBMI = BMIMark > BMIJohn;
if (BMIMark > BMIJohn) {
    console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
} else {
    console.log('John\'s BMI is higher than Marks\'s');
}
*/

/*
var firstName = "John";
var civilStatus = "Single";

if (civilStatus === "married") {
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully marry soon :');
}
*/


/*Boolean LOGIC*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age > 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}*/


// Coding - challenge 2
/*
var scoresOfJohn = 111 + 120 + 103
var scoresofMike = 120 + 94 + 123
var scoresofMarry = 97 + 134 + 102

var averageScoreOfJohnTeam = scoresOfJohn / 3;
var averageScoreOfMikeTeam = scoresofMike / 3;
var averageScoreOfMarryTeam = scoresofMarry / 3;

console.log(averageScoreOfJohnTeam, averageScoreOfMikeTeam, averageScoreOfMarryTeam)
if (averageScoreOfJohnTeam > averageScoreOfMikeTeam && averageScoreOfJohnTeam > averageScoreOfMarryTeam) {
    console.log("The winner is John\'s Team. Score is " + averageScoreOfJohnTeam);
} else if (averageScoreOfMikeTeam > averageScoreOfJohnTeam && averageScoreOfMikeTeam > averageScoreOfMarryTeam) {
    console.log("The winner is Mike\'s Team, Score is " + averageScoreOfMikeTeam);
} else if (averageScoreOfMarryTeam > averageScoreOfJohnTeam && averageScoreOfMarryTeam > averageScoreOfMikeTeam) {
    console.log("The winner is Marry Team, Score is " + averageScoreOfMarryTeam);
} else if (averageScoreOfMarryTeam == averageScoreOfJohnTeam && averageScoreOfMarryTeam == averageScoreOfMikeTeam && averageScoreOfJohnTeam == averageScoreOfMarryTeam) {
    console.log("Match draw");
}
*/

/**
 * Functions
 

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageHemanth = calculateAge(1998);
var ageYashwanth = calculateAge(1995);
console.log(ageHemanth, ageYashwanth);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years. ');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1998, 'Hemanth');
yearsUntilRetirement(1995, 'Yashwanth');
*/

/**
 * Function statements and expressions
 */
//Function declaration
//function whatDoYouDo(job, firstName){}


// Function Expression
/**
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab ';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'Hemanth'));
console.log(whatDoYouDo('driver', 'Yashwanth'));
console.log(whatDoYouDo('designer', 'Rachana'));
 */

/**
 * Arrays
 */

/*
var names = ['Yashwanth', 'Hemanth', 'Rachana'];
var years = new Array(1995, 1998, 2002);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'HI';
names[names.length] = 'Hello';
console.log(names);

//Different data types
var Yash = ['Yashwanth', 'Indrala', 1995, 'Developer', false];

Yash.push('blue');
//unshift is used for adding element in an array in first position;
Yash.unshift('Mr.');
console.log(Yash);

Yash.pop(); //Deletes last element in an array;
console.log("After pop", Yash);
console.log("before Shift", Yash);
Yash.shift(); //Deletes the first element in an array;

console.log("after shift", Yash);

console.log(Yash.indexOf(1995));

var Output = Yash.indexOf('Developer') === -1 ? 'Yashwanth is not a Developer' : 'Yashwanth is a Developer';
console.log(Output);
*/

/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[1])
];
var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];
console.log(tips, finalValues);*/


/**
 * Objects and properties
 */
/*
var hemanth = {
    firstName: 'Hemanth',
    lastName: 'Indrala',
    birthYear: 1998,
    family: ['Yashwanth', 'Eshwar', 'Sarala'],
    job: 'Software Devloper',
    isMarried: false
};

console.log(hemanth.firstName);
console.log(hemanth['lastName']);
var x = 'birthYear';
console.log(hemanth[x]);

//Object properties mutation
hemanth.job = 'Software Engineer';
hemanth['isMarried'] = true;
console.log(hemanth);

//new Object creation syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1999;
jane['lastName'] = 'Smith';
console.log(jane);
console.log(jane['birthYear']);
console.log(jane.lastName);*/

/**
 * Objects and methods
 */
/*
var hemanth = {
    firstName: 'Hemanth',
    lastName: 'Indrala',
    birthYear: 1998,
    family: ['Yashwanth', 'Eshwar', 'Sarala'],
    job: 'Software Devloper',
    isMarried: false,
    calculateAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

console.log(hemanth);
*/

/*coding challenge 4*
var john = {
    fullName: 'John Smith',
    mass: 80,
    height: 170,
    calculateBMI: function() {
        this.johnBMI = this.mass / (this.height * this.height);
        return this.johnBMI;
    }
};

var johnBMIValue = john.calculateBMI();

var mark = {
    fullName: 'Mark Agin',
    mass: 80,
    height: 170,
    calculateBMI: function() {
        this.markBMI = this.mass / (this.height * this.height);
        return this.markBMI;
    }
};

var markBMIValue = mark.calculateBMI();

if (johnBMIValue > markBMIValue) {
    console.log(john.fullName, john.johnBMI);
} else if (johnBMIValue == markBMIValue) {
    console.log("both john and smith has BMI", johnBMIValue, markBMIValue)
} else {
    console.log(mark.fullName, mark.markBMI);
}

console.log(john); 
console.log(mark); */

/**
 * Coding challenge - 5
 */

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmounts: [],
    calcTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            if (this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.finalAmounts[i] = this.bills[i] + this.tips[i];
        }
    }
};

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    tips: [],
    finalAmounts: [],
    calcTips: function() {
        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                percentage = .2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = this.bills[i] * percentage;
        }
    }
};

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips , with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + ' \'s family page higher tips , with an average of $' + mark.average);
}