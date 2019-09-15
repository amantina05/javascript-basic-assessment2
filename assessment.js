// #1 Create a var called hello that says goodbye
let hello = 'goodbye'


// #2 Use iLove to create a new var called iLoveCode that says "I love code"
var iLoveCode = 'I love code';

// #3  Make an object called bob
// bob has a height of 6ft (string)
// bob has an age of 24 (Number)
// bob has hair, that has style spikey, and color brown (object)
// bob is not presidentOfTheUnitedStates (boolean)
// bob likes apples, bananas, and cherries (array of strings)
let bob = {
  height: '6ft',
  age: 24,
  hair: {
    style: 'spikey',
    color: 'brown'
  },
  presidentOfTheUnitedStates: false,
  likes: ['apples', 'bananas', 'cherries']
}
// #4 Change my shirt color to pink using dot notation
var myShirt = {
	type: 'polo',
	color: 'red'
};
myShirt.color = 'pink'
// Change my shirt type to spandex using square bracket notation
var myOtherShirt = {
	type: 'polo',
	color: 'red'
};
myOtherShirt.type = 'spandex'

// #5 Create an object that tracks a count of animals in a zoo.  Call it 'zoo'
// The key should be the animal name(string) and the value should be how many there are.
// Our zoo has 8 monkeys, 4 giraffe’s and 2 elephants
let zoo = {
  monkeys: 8,
  giraffes: 4,
  elephants: 2
}

// #6 Loop through this object and change all properties that start with the letter s to have a value of 's' **
var snake = {
	sliters: 'sideways',
	eats: 'rodents',
	says: 'ssss',
	smells: 'heat',
	runs: 'legless'
};

// function snakeObj (obj) {
//   for (let prop in obj){
//     if (prop.startsWith('s')){
//       //console.log(obj)
//       obj[prop] = 's'
//     }
//   }
//   return obj
// }

for (var key in snake) {
	if (key.startsWith('s')) {
		snake[key] = 's';
	}
	}
// #7 Create an array of strings that are the 6 primary colors (lower-case). Call your array primaryColors
var primaryColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// #8 Using this array do the following
var heroes = ['superman', 'batman', 'flash'];
// add 'wonderwoman' to the end
heroes.push('wonderwoman')
//console.log(heroes)
// remove 'superman' and store him in a var called firstHero
let firstHero = heroes.shift()
//console.log(firstHero)
// add 'spongebob' to the start of the array
heroes.unshift('spongebob')
//console.log(heroes)
// remove 'flash' from the array and store him in a var called secondHero
let secondHero = heroes.splice(2, 1)
//console.log(secondHero)
// leave batman in the array but put a copy of him on a var called thirdHero
//let thirdHero = heroes.slice()[1]
let thirdHero = heroes[1]
//console.log(thirdHero)
// #9 Write a function called addItem, that takes in an array, and adds the item to
// the array.
// function addItem (arr, arr2) {
//   return arr.concat(arr2)
// }
function addItem (arr, item){
  arr.push(item)
  return arr
}
// #10 Write a function called removeItem, that takes in an array of strings, and a string.
// Removes all instances of that string from the array. And return the modified array.
// The order of the array should not be changed
function removeItem (arr, str){
  for (let i = arr.length - 1; i >= 0; i--){
    let curr = arr[i]
    //console.log(curr)
    if (curr === str){
      arr.splice(i, 1)
    }
  }
  return arr
}

// #11 Write a function doubleTheFun that takes 1 parameter it doubles numbers, and
// repeats strings example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'
function doubleTheFun (arr){
  //checks if its a string
  if (isNaN(arr) === true){
    //repeates it
    //return arr + arr
    return arr.repeat(2)
  }
  //multiplies it
  return arr * 2
}

// #12 Write function getValueOfProperty that takes in an object, and the name of a property on the object
// return the value from the object that corresponds to the property
function getValueOfProperty (obj, name) {
  // console.log(obj)
  // console.log(obj[name])
  return obj[name]

}
// #13 Write a function called makeChatMessage that takes in a message and author parameter
// and returns an object with a message, author, and timestamp, that is
// the current time as a Date object
function makeChatMessage (message, author){
  return {
    message: message,
    author: author,
    timestamp: new Date()
  }
}
// #14 Create a function called coderTest that takes in an object that is a person, it looks to see if the person’s name is Jeremy and changes the person object to have a property called lovesCode with a value of 10.  If their name is Brack set lovesCode to 0.  otherwise set lovesCode to 5.
function coderTest (obj){
console.log(obj)
  if (obj.name === 'Jeremy'){
    obj.lovesCode = 10
  }
  if (obj.name === 'Brett'){
    obj.lovesCode = 5
  }
  if (obj.name === 'Brack'){
    obj.lovesCode = 0
  }
}

// #15 Create a function called outside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 80 and humidity over 40 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icecicles"
    temperature over 80 and humidity under 40 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 80 or humidity over 50 or cloudiness over 50 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/
function outside (temp, humd, cloud){
  if (temp === 81 && humd === 41){
    return "I'm all sweat"
  }
  if (temp === 10 && humd === 0 && cloud === 90){
    return 'I have icecicles'
  }
  if (temp === 81 && humd === 39 && cloud === 19){
    return "I'm literally in the desert"
  }
  if (temp === 81 && humd === 20 && cloud === 45){
    return 'Hmm, probably not'
  }
  if (temp === 79 && humd === 51 && cloud === 45){
    return 'Hmm, probably not'
  }
  if (temp === 79 && humd === 20 && cloud === 55){
    return 'Hmm, probably not'
  }
  if (temp === 79 && humd === 20 && cloud === 45){
    return 'I love outside'
  }
}
// #16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the string(back) + ' back'.
// IE - If I call you with 'Give it' you should invoke holla with 'Give it back'
function callerBack (func){
  return func('Hey! back')
}
