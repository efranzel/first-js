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
