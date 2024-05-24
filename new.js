//How can we generate a random alphanumeric string in JavaScript?
let res=Array.from(Array(20), () => Math.floor(Math.random() * 36).toString(36)).join('');
console.log(res)
//How can we call a function which logs a message after every 5 seconds?
function everyTime() {
    console.log('each 1 second...');
}

var myInterval = setInterval(everyTime, 5000);
//How can we delay calling a function after 5 seconds?
function del(){
  setTimeout(() => {
    console.log("Hello javascript")
  }, 5000)
}
del()

//Write a function that performs binary search on a sorted array?

//How can we parse a given JSON object?
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

//How do you check whether a string contains a substring?
const string = "foo";
const substring = "oo";

console.log(string.includes(substring)); // true

How do I get query string values in javascript?
Assuming that the value of the location.search is:'?type=list&page=20';
const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
    console.log(`${key}:${value}`);
}
const urlParams = new URLSearchParams('?type=list&page=20');

for (const key of urlParams.keys()) {
    console.log(key);
}
// useinsted of keyys values and entries

How to create and trigger events in javascript?
const event = new Event('build');

// Listen for the event.
elem.addEventListener('build', (e) => { /* … */ }, false);

// Dispatch the event.
elem.dispatchEvent(event);
//adding data 
const event = new CustomEvent('build', { detail: elem.dataset.time });
This will then allow you to access the additional data in the event listener:

function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}

//How to display the current date in javascript?
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(date); // "17-6-2022"


//How do you compare time for two dates?

var g1 = new Date();
    var g2 = new Date();
    if (g1.getTime() === g2.getTime())
        console.log("Both  are equal");
    else
        console.log("Not equal");

//How do you check if a string starts with another string?
     --Syntax
     --startsWith(searchString)
     --startsWith(searchString, position)

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false


//How do you remove whitespaces from a given string?
  var str = "   hello   ";
  let x =str.replace(/ /g, "")
  console.log(x)

//How do you assign default values to variables?
let isHappyHour = 'suresh';

// Logical Operator
isHappyHour = isHappyHour || 'suresh';

// Ternary
isHappyHour = isHappyHour ? isHappyHour : 'suresh';

// If/Else
if (isHappyHour) {
  isHappyHour = isHappyHour;
} else {
  isHappyHour = 'suresh';
}

console.log(isHappyHour); // 'suresh'

//For a given function, count the number of parameters expected by a function?
//define a function
function multiply(a, b){
  return a * b;
}

//get the number of parameters for function multiply
console.log(multiply.length)

//define a function
function sum(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4;
}

//get the number of parameters for function sum
console.log(sum.length)


//Implement a method which generates 5 random numbers?
// generating  a random number
const a = Math.random();
console.log(a);
We can use this value in the range (0,1) to find the random value between any two numbers using formula:

Math.random() * (highestNumber - lowestNumber) + lowestNumber
Example 2: Get a Random Number between 1 and 10
// generating a random number
const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);

//Implement a method which generates random numbers between 41 and 67 and sort them reverse?
const a = Math.random() * (67-41) + 41
console.log(` ${a}`);

//How do you search a string for a pattern?
let string = "GeeksforGeeks is computer "
        + "science portal for computer geeks";
        console.log(string.match(/gee/gi));

//How to write an Object and implement multiple function chaining?
Function chaining
Function chaining is nothing but grouping functions in one single line using dot notation. This type of chaining makes the code very concise and also improves the performance.Here we are going to learn function chaining using regular objects

var obj = function(){
      this.i = 0;
      this.add = function(i){
         this.i += i;
       };
       this.subtract = function(i){
          this.i -= i;
       };
       this.print = function(){
          document.write(this.i);
          document.write("</br>");
          document.write(x.add(3));  // returns undefined
       }
   }
   var x = new obj();
   x.add(5);
   x.subtract(2);
   x.print(); // 5-2 = 3 so prints 3.
   x.add(5).subtract(2).print();  //  function chaining is not possible so undefined

// How do you determine whether an object is frozen or not?
Input : const object = {
        property: 'hi geeksforgeeks'
        };
        console.log(Object.isFrozen(object));
Output : false

Input : const object = {
        property: 'hi geeksforgeeks'
        };
        Object.freeze(object);
        console.log(Object.isFrozen(object));
Output : true

//How do you determine two values are the same or not using an object?

function isHeroEqual(object1, object2) {
  return object1.name === object2.name;
}
const hero1 = {
  name: 'Batman'
};
const hero2 = {
  name: 'Batman'
};
const hero3 = {
  name: 'Joker'
};
isHeroEqual(hero1, hero2); // => true
isHeroEqual(hero1, hero3); // => false



//How do you copy properties from one object to another object?
const thirdObject = {
   ...firstObject,
   ...secondObject   
}

//How do you determine if an object is sealed or not?
// Objects aren't sealed by default.
const empty = {};
Object.isSealed(empty); // false

// If you make an empty object non-extensible,
// it is vacuously sealed.
Object.preventExtensions(empty);
Object.isSealed(empty); // true

//latest
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
//How do you get an enumerable key and value pairs?
Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property [key, value] pairs found directly upon object. The ordering of the properties is the same as that given by looping over the property values of the object manually.
//1
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
//2
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]


//What is the main difference between Object.values and Object.entries method?
Object. values(obj) – returns an array of values. Object. entries(obj) – returns an array of [key, value] pairs.
//values
let fullname = {
        firstname: "geeks",
        middlename: "for",
        lastname: "geeks",
    };
    let name = Object.values(fullname);
    console.log(name);
	
	//keysObject.entries() method:

This method returns an array of the keys and values of the objects’ enumerable string-keyed properties. It works similarly to iterating with a for…in the loop, with the exception that a for…in the loop also enumerates properties in the prototype chain
let fullname = {
        firstname: "geeks",
        middlename: "for",
        lastname: "geeks",
    };
    let name = Object.entries(fullname);
    console.log(name);

// How can you get the list of keys of any object?
he Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
Syntax
Object.keys(obj)
//1
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

//2// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value() { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']

//3// In ES5
Object.keys('foo');  // TypeError: "foo" is not an object

// In ES2015+
Object.keys('foo');  // ["0", "1", "2"]

//How do you encode an URL?
encodeURIComponent()
The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
let uri = "my test.asp?name=ståle&car=saab";
let encoded = encodeURI(uri);
console.log(encoded)

//How do you define property on an Object constructor?
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 

//How can you call the constructor of a parent class?
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

Tip: To understand the "inheritance" concept (parent and child classes) better, read our JavaScript Classes Tutorial.

Example
Create a class named "Model" which will inherit the methods from the "Car" class, by using the extends keyword.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();


//How do you check whether an object can be extendable or not?
The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).

const object1 = {};

console.log(Object.isExtensible(object1));
// expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// expected output: false


//How do you prevent an object from extending?
The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It also prevents the object's prototype from being re-assigned.
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}
//2
// Object.preventExtensions returns the object
// being made non-extensible.
const obj = {};
const obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Objects are extensible by default.
const empty = {};
Object.isExtensible(empty); // true

//How do you find the Vowels?

// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
Run Code
Output

Enter a string: JavaScript program
5
In the above example,

All the vowels are stored in a vowels array.
Initially, the value of the count variable is 0.
The for...of loop is used to iterate over all the characters of the string.
The toLowerCase() method converts all the characters of a string to lowercase.
The includes() method checks if the vowel array contains any of the characters of the string.
If any character matches, the value of count is increased by 1.

//What are default values in destructuring assignment?
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

//How do you swap variables in destructuring assignment?
let a = "First";
  let b = "Second";
  [a, b] = [b, a];
  
  console.log("a:", a);
  console.log("b:", b);

// How do you combine two or more arrays?
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//How to create a specific number of copies for a string?

function repeatStringNumTimes(string, times) {
  //Step 1. If times is positive, return the repeated string
  if (times > 0) { // (3 > 0) => true
    return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
  }
  
  //Step 2. Else if times is negative, return an empty string if true
  else {
    return "";
  }
}

let res =repeatStringNumTimes("abc", 3);
console.log(res)



//What is the easiest way to convert an array to an object?
var arr = [{a:{b:1}},{c:{d:2}}] 
var newObj = arr.reduce((a, b) => Object.assign(a, b), {})

console.log(newObj)

//Verify that a function argument is a Number or not?
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

console.log(milliseconds('100F'));
// expected output: "Not a Number!"

console.log(milliseconds('0.0314E+2'));
// expected output: 3140

//What is the easiest way to resize an Array?
// Quick way
a = ['A','B','C','D'];
console.log(a.length); // 4
a.length = 3;
console.log(a); // ['A', 'B', 'C'];

// Proper way
function resize(arr, newSize, defaultValue) {
    return [ ...arr, ...Array(Math.max(newSize - arr.length, 0)).fill(defaultValue)];

//What's the difference between a function expression and function declaration?
The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.

//How to detect a mobile device with JavaScript?
Checking for a mobile device in a web app is something that you need to do often. In most cases developers use agent detection. But User Agent detection is not a recommended technique for modern web apps. There is a JavaScript API built-in for detecting media. The JavaScript window.matchMedia() method returns a MediaQueryList object representing the results of the specified CSS media query string. You can use this method to detect a mobile device based on the CSS media query.



//How to fill static values in an array?
In the following example, we use the fill() method to fill the array with 45 from start index is 1 to end index is 4 (exclusive).


var value = [4, 10, 5, 7, 6, 18];
value.fill(45, 1, 4); 
console.log(value);

//Why do we use The some() method in Arrays?
The some() method checks if any array elements pass a test (provided as a callback function). The some() method executes the callback function once for each array element. The some() method returns true (and stops) if the function returns true for one of the array elements\\
const ages = [3, 10, 18, 20];
document.getElementById("demo").innerHTML = ages.some(checkAdult);

function checkAdult(age) {
  return age > 18;
}

//How to add 15 minutes to a JavaScript Date?
var oldDateObj = new Date();
var newDateObj = new Date();
newDateObj.setTime(oldDateObj.getTime() + (15 * 60 * 1000));
console.log(newDateObj);

Explain JavaScript Promises with an example?

//Which keyword can be used to deploy inheritance in ES6?
Class Inheritance
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class:
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();



//What is the difference between for..of and for..in?

//How to set a property in localStorage?
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("demo").innerHTML = localStorage.getItem("lastname");

//2
Save Data to Local Storage
localStorage.setItem(key, value);
Read Data from Local Storage
let lastname = localStorage.getItem(key);
Remove Data from Local Storage
localStorage.removeItem(key);
Remove All (Clear Local Storage)
localStorage.clear();
Parameters

//Give a list of the various ways using which an HTML element can be accessed within a JavaScript code?
Get HTML element by Id
Get HTML element by className
Get HTML element by Name
Get HTML element by tagName
Get HTML element by CSS Selector

State the difference between Apply and Call?

What is the difference between undefined and not defined in JavaScript?

Explain Closure in JavaScript with an example?

//How to calculate the length of an associative array using JavaScript?
var details = new Array();
details["Name"] = "John";
details["Age"] = 21;
details["CountryName"] = "US";
details["SubjectName"] = "JavaScript";
console.log("The length=="+Object.keys(details).length);

Explain JavaScript promise.all with an example?

Explain Promise.race with an example?

Give an example of an Anonymous function?

What is Prototype Property? Explain with an Example.

Explain function hoisting with an example?

//How to implement Bubble sort in JavaScript?
function bblSort(arr){
    
 for(var i = 0; i < arr.length; i++){
    
   // Last i elements are already in place 
   for(var j = 0; j < ( arr.length - i -1 ); j++){
      
     // Checking if the item at present iteration
     // is greater than the next iteration
     if(arr[j] > arr[j+1]){
        
       // If the condition is true then swap them
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 // Print the sorted array
 console.log(arr);
}
 
 
// This is our unsorted array
var arr = [234, 43, 55, 63,  5, 6, 235, 547];
 
 
// Now pass this array to the bblSort() function
bblSort(arr);

How to find prime numbers in an Array?

How to generate fibonacci series in JavaScript?
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.

fizz buzz
for(let i=1; i<=50; i++){
  if(i%3 == 0 && i%5 !==0){
    console.log("fizz")
    console.log(i)
  }
  else if(i%5== 0 && i%3 !==0){
    console.log("buzz")
  }
  else if(i%3==0 && i%5==0){
    console.log("fizzbuzz")
    console.log(i)
  }
}
//rev stringwithout built inmethod
function revStr(str){
  let newStr= ""
  for(let i=str.length-1; i>=0; i--){
    newStr = newStr+str[i]
  }
  return newStr
}
console.log(revStr("suresh"))

//fibanaciseries
var num = parseInt(prompt("enter number"))
var a=0;b=1;
var nt;
console.log(a)
console.log(b)
nt=a+b
while(nt<=num){
console.log(nt)
  a=b;
  b=nt;
  nt=a+b
}

//space aroung the capital letters
let str ="MyHomeTown"

let res =str.replace(/[A-Z]/g, " $&").trim()
console.log(res)

//number first then letters
let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
function numArr(arr){
  let numbers = []
  let letters = []
  let final   = []
  numbers = arr.filter(item => typeof item === "number")
  letters = arr.filter(item => typeof item === "string")
  final =[...numbers.sort(), ...letters.sort()]
  return final
}
console.log(numArr(arr))

//rotate clock wise
let m = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
function rotateClock(mat){
  for(let r=0; r<mat.length; r++){
    for(let c=0; c<r; c++){
      let temp = mat[r][c]
      mat[r][c] =mat[c][r]
      mat[c][r] =temp
        }
  }
  let final = mat.map(item => item.reverse())
  return final
}
console.log(rotateClock(m))

//check prime or Not
function isPrime(num){
  if(num <=1) return false;
  if(num ===2) return true
  let numSqrt = Math.sqrt(num)
  for(let i=2; i<=numSqrt;i++){
    if(num%i===0)return false
  }
  return true
}
console.log(isPrime(200))

//find vowel length
const vowels = ["a", "e", "i", "o", "u"]
let string = prompt("Enter Name");
function findVowels(str){
  let count =0
  for(let letters of str.toLowerCase()){
    if(vowels.includes(letters)){
      count++
    }
  }
       return count
}
       let res = findVowels(string)
      console.log(res)
	  
	 //sum of string 
	  let str ="12345"
let res = str.split('')
function add(str){
    let sum=0;
    for(i=0; i<str.length; i++){
      sum += parseInt(str[i])
    }
    return sum
}
console.log(add(res))

//repeat array n times
let arr = [1,2,3,4,5]
let n = 3;
function repeat(arrvalue, num){
for(let i=0; i<num; i++){
  let litem = arrvalue.pop()
    arrvalue.unshift(litem)
   console.log(arrvalue)
}
}
repeat(arr, n)
//write prime number 1 -100
let count =0;
let i, j
for(let j=2; j<=100; j++){
  for(let i=1; i<=j; i++){
    if(j%i==0){
      count++
    }
  }
  if(count==2)
    console.log(j)
    count=0
}

//Promises
fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  res => res.json()
).then(
  json => console.log(json)
).catch(err => console.log(err))

//async await
async function runProcess(){
 try{
   let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
   let json = await response.json()
   console.log(json)
 }
 catch(err) {
  console.log(err)
 }
}
runProcess()

Header
footer
slider
sidebar
sections 
Accordion
Tabs
forms

https://www.veed.io/view/c02d5b3e-fc65-4b4c-9412-4da15a2a9c44?panel=share
https://www.veed.io/view/bb7d3b75-d88d-4e48-9934-d9da393877ae?panel=share
Presentation --
gamma.app create ppt
12ft.io for artical reading
sci-hub.se  all research pages
merlin details explain tothe students
playgroundai.com
app.yoodli.ai
bard.google.com generatin code any language
debugcode.ai find the bugs written code
formula.dog excell remember forms
signalhire.com find out mail and phone numbers of linked in profile
midjourney.com
discard.com
unroll.me