//alert('Welcome');//
//alerts are annoying, let's use console.log//
console.log('Welcome');
/*this will log to the console*/

//create a function that updates a DOM element
function change(){
  //function body. This is where stuff happens
  document.getElementById('foo').innerHTML = 'Welcome';
}

//basic data types in Javascript
var name = 'Lucille'; //store a string in a var
var numberOfWidgets = 10; //number
var isCodingCool = true; //boolean
console.log(name); //log the value of a var to the console

//store an array in a var
var characters = [50, true, 'Lucille', 'Michael Bluth', 'Tobias', 10, 20];
console.log(characters[3]);

var deadSong = 'Dark Star';
var yearOfBirth = 1966;
var tired = true;
console.log(deadSong);
console.log(yearOfBirth);
console.log(tired);

var newcareer = ['librarian', 'ESL teacher', 'development officer', 'religious studies teacher']
console.log(newcareer);
console.log(newcareer[1]);

//multi-dimensional array
var meat = ['ham', 'bologna', 'turkey'];
var fruit = ['oranges', 'apples', 'grapes'];
var food = [meat, fruit];
console.log(food);
console.log(food[1][0]); //logs 'oranges' to the console

// Object: curly brackets indicate object
var user = {
  firstName: 'Lucille',
  age: 40,
  lastName: 'Bluth',
  hasHair: true,
  'has-feet': true
};
//access properties of our user object using dot notation
console.log(user.firstName); //this will log Lucille to the console
//we can also access properties on objs using bracket notation
console.log(user['firstName']);
console.log(user['has-feet']);

var number1 = 51;
var number2 = 27;
console.log(number1+number2);

var aboutMe = {
  firstName: 'Ethan',
  lastName: 'Franzel',
  fingerCount: 10,
  interests: ['music', 'meditation', 'technology']
};
console.log(aboutMe.firstName);
console.log(aboutMe.lastName);
console.log(aboutMe.fingerCount);
console.log(aboutMe.interests);

alert(number1+number2);
alert(aboutMe.firstName + ' ' + aboutMe.lastName);
alert(number1*number2);
