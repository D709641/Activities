// var animal = 'kitty';

// if (animal === 'kitty') {
// result = 'cute'; } 
// else {
//     result = 'still nice';
// }
// console.log(result);

// var animal = 'kitty';
// var result = (animal == 'kitty') ? 'cute' : 'still nice';
// console.log(result);

// var a = 0;
// var str = 'not a';
// var b = '';
// b = a === 0 ? (a = 1, str += ' test') : (a = 2);
// console.log(a);

// var a=1;
// a === 1 ? alert('Hey, it is 1!') : alert('Weird, what could it be?');
// if (a === 1){ 
//     alert('Hey, it is 1!')
// } else {
//     alert('Weird, what could it be?')
// };

//Invalid Statements
// var animal = 'kitty';
// for (var i = 0; i < 5; ++i) {
// (animal === 'kitty') ? break : console.log(i); }

// var animal = 'kitty';
// i= (animal === 'kitty') ?  'meow' : 'woof';
// console.log(i);

//Switch 
var value = 1; 
// switch (value) {
//     case 1:
//     console.log('I will always run'); break;
//     case 2:
//     console.log('I will never run'); break;
//     }

//skip break 
// switch (value) { case 1:
//     console.log('I will only run if value === 1');
//     // Here, the code "falls through" and will run the code under case 2
// case 2:
// console.log('I will run if value === 1 or value === 2'); break;
// case 3:
// console.log('I will only run if value === 3'); break;
// }

// function john() { return 'John';}
// function jacob() { return 'Jacob';}
// var name= "john";
// switch (name) {
// case john(): // Compare name with the return value of john() (name == "John")
//     console.log('I will run if name === "John"');
//     break;
// case 'Ja' + 'ne': // Concatenate the strings together then compare (name == "Jane")
//     console.log('I will run if name === "Jane"');
//     break;
// case john() + ' ' + jacob() + ' Jingleheimer Schmidt':
//     console.log('His name is equal to name too!');
//     break; }

// var x = "c" ;
// switch (x) { 
//     case "a": 
//     case "b": 
//     case "c":
//     console.log("Either a, b, or c was selected.");
//     break; 
//     case "d":
//     console.log("Only d was selected.");
//     break; 
//     default:
//     console.log("No case was matched.");
//     break; // precautionary break if case order changes 
// }
// var i=2;
// if (i < 1) {
//     console.log("i is smaller than 1");
//     } 
// else if (i < 2) {
//     console.log("i is smaller than 2");
//     } 
// else {
//     console.log("none of the previous conditions was true");
// }


// const AnimalSays = { 
//     dog () {
//     return 'woof'; },
//     cat () {
//     return 'meow';
//     },
//     lion () {
//     return 'roar';
//     },
//     // ... other animals
//     default () { return 'moo';
//     } };
// function makeAnimalSpeak (animal) {
//     // Match the animal by type
//     const speak = AnimalSays[animal] || AnimalSays.default; 
//     console.log(animal + ' says ' + speak());
//     }
// makeAnimalSpeak('dog') 
// makeAnimalSpeak('cat') 
// makeAnimalSpeak('lion') 
// makeAnimalSpeak('snake')


// var x = 11
// x == 10 && alert("x is 10")
// console.log(x)
//x == 10 || alert("x is not 10")