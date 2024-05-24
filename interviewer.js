//Interview asked questions

//convert string array to array

var value = [1,2,"3","4"];
var json = JSON.parse("[" + value + "]")
let res = json.reduce((a,b) => a+b)
console.log(res);

write your own funciton and sort the array?
var arr = [90,20,230,5,1,2,3,4];
arr.sort(function (first, second) {
   if (first > second) {
      return 1;
   }
   if (first < second) {
      return -1;
   }
   return 0;
});
console.log(arr)

//display number after1 ser 1-10
function printNumbersForEvery1Sec(n){
    for(let i=1; i<=n; i++){
        setTimeout(() => {
            console.log(i)
        }, i* 1000)
    }
}
printNumbersForEvery1Sec(10)
How is .js is executed by the browser?

Every Web browser comes with a JavaScript engine that provides a JavaScript runtime environment.
//find not repeated values
let arr = [1,2,2,3,4,5,6,4];
let res = arr.filter((item, i) => arr.indexOf(item) === arr.lastIndexOf(item));
console.log(res)

unique values withoutfree defined methods
function unique(arr){
  let res = [];
  for(let i=0; i<arr.length; i++){
    if(res.indexOf(arr[i]) === -1 && arr[i] !==""){
      res.push(arr[i])
    }
  }
  return res
}
let res = unique([1,3,4,2,3,4,5])
console.log(res)


let str = "welcome to anantapur"
// emoclew ot rupatnana

function revStr(str){
  return   str.replace(/[a-zA-z]+/gm, function(item){
    return item.split('').reverse().join('')
  })
 
  
       
}
let res = revStr(str)
//second highest value
var arr = [23, 21, 34, 34,34,90];
let temparr= [...new Set(arr)].slice(0)
let res = temparr.sort()[temparr.length-2]
let index = arr.indexOf(res)
console.log(res)
console.log(index)

//curring
function add(...args1){
  return function(...args2){
    return function(...args3){
      return args1.concat(args2).concat(args3).reduce((a,b)=>a+b)}}}
                
console.log(add(1)(2)(3))
console.log(add(1,2)(3,4)(5))

//dynamic currying
function add(a){
  return function(b){
      return b ? add(a+b) : a
  }
}
console.log(add(1)(2)(3)(4)(5)())


//async await

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

//Fibanic series
function printFibonacci(n) {
  let a = 0, b = 1, c;
  console.log(a);
  console.log(b);
  for (let i = 1; i < n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

printFibonacci(5);

//adobe
//Call apply and bind?
function person(city, state){
  return this.name + this.age + city + state
}
let person1 = { 
  name:"suresh",
  age:20,
}
let person2 = {
  name:"Mahesh",
  age:30,
}
let res = person.bind(person2, "bng", "ka")
console.log(res())

// Howto change css theme?

//write fibanic series?
function printFibonicc(n){
  let a=0, b=1, c;
  console.log(a);
  console.log(b);
  for(let i=1; i<n; i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
  }
}
printFibonicc(10)
//tab index and how do we skip the content from tabbing?
The way to do this is by adding tabindex="-1". By adding this to a specific element, it becomes unreachable by the keyboard navigation.
Usage
Tabindex can be used on the following elements:

input,
anchor (a),
textarea,
select,
button.
After creating any of these elements, give the text a proper

//Flex box properties?

flex-direction.
flex-wrap.
flex-flow.
justify-content.
align-items.
align-content.

//box-sizing	
Defines how the width and height of an element are calculated: should they include padding and borders, or not

// fetch data api using javascript using promises
import axios from "axios";
import "./styles.css";

const data = axios.get("https://dummyjson.com/products");

data
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise finished");
  });

document.getElementById("app").innerHTML = ``;

//using async and await

import axios from "axios";
import "./styles.css";

const fetchingData = async () => {
  try {
    const data = await axios.get("https://dummyjson.com/products");
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("say hai");
  }
};
fetchingData();
oops
abstraction: The main purpose of abstractionis hiding the unnecessary details from the users.
ex:
class ATM{
  constructor(withdraw){
    this.balance=1000;
    this.withdraw=withdraw
  }
  getAmount(){
    let minimum=500;
    if(this.balance-this.withdraw >= minimum){
      console.log("success")
    }
    else{
      console.log("failed")
    }
  }
}
let obj = new ATM(1000)
console.log(obj.minimum)
obj.getAmount()

encopsulation:itis an mechanisam of bundling data variable and methods together & hides them from other classes
ex
class Person{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary
    }
    getName(){
      console.log(this.name)
    }
    getAge(){
      console.log(this.age)
    }
    getSalary(){
      console.log(this.salary)
    }
}
obj = new Person("suresh", 35, 2000)
obj.getAge()
obj.getName()
obj.getSalary()
inheritance:inheritance is a mechanism in which one class acquires the property of another class
ex
class Parent{
  getDetails(){
    console.log("Hello")
  }
}
class child extends Parent{

}
obj = new child();
obj.getDetails()
polymorpisam:polymorpisam allow us to perform a single action in different ways
class Parent{
  getDetails(){
    console.log("Hello")
  }
}
class child extends Parent{
getDetails(){
    console.log("Hi")
  }
}
obj = new child();
obj.getDetails()
oops benifits
Reuseof the code through inheritance
Flexibility through polymorphism
Easier to troubleshoot
code maintainability

var city = ["Singapore", "Delhi", "London"];

function cities(cityArray) {
    var result = {};

    for (var i = 0; i < cityArray.length; i++) {
        var cityName = cityArray[i];
        result[cityName] = cityName;
    }

    return result;
}

var cityObject = cities(city);
console.log(cityObject);


//sort andmerge without predefined
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Loop through both arrays until one of them is exhausted
    while (i < arr1.length && j < arr2.length) {
        // Compare elements from both arrays
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from the first array, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from the second array, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example arrays
const array1 = [2, 6, 10, 24, 30];
const array2 = [3, 5, 9, 25, 29];

// Merge the arrays
const mergedArray = mergeSortedArrays(array1, array2);
console.log(mergedArray);

//sort without predefined
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
var myArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", myArray);
console.log("Sorted array:", bubbleSort(myArray));

//findvowels given string
function findVowels(str){
  let vowels = str.match(/[aeiou]/gi)
  return vowels
}
console.log(findVowels("suresh"))

//anagram without built in sort method
function isAnagram(str1, str2){
  if(str1.length !==str2.length) return false
  
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase()
  let counter= {};
  for(let letters of str1){
    counter[letters] = counter[letters] ? counter[letters] +1 : 1
  }
  for(let items of str2){
    if(!counter[items]) return false
  }
  return true
}
let str1 = 'I am Monu'
let str2 = 'am I OnMUs'
const checkAnagram = isAnagram(str1, str2)
console.log(checkAnagram)
//flatten array
var arr = [[1, 2, 3], [true], [4,5, 6], [[12, 23], [34, 45]]]
function flattenArray(arr){
  let result = [];
  arr.forEach(item => {
    if(Array.isArray(item)){
      result = result.concat(flattenArray(item))
    }
    else{
      result.push(item)
    }
  })
  return result
}
let res= flattenArray(arr)
console.log(res)

//keys of Object
const json = {
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "hobbies": ["reading", "painting"],
  "friends": [
    {"name": "Alice", "age": 28},
    {"name": "Bob", "age": 32}
  ]
};
// Recursive function to print keys of nested objects
function printKeys(obj, parentKey = '') {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      printKeys(obj[key], parentKey ? `${parentKey}.${key}` : key);
    } else {
      console.log(parentKey ? `${parentKey}.${key}` : key);
    }
  }
}

// Writing keys of the JSON object
printKeys(json);

//check two arrays

function arraysHaveSameElements(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
}

const array1 = [1, 2, 3];
const array2 = [3, 2, 1];
console.log(arraysHaveSameElements(array1, array2)); // Output: true

//print pattern
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

printPattern(5);



let input  = "aaabbccaa"

//expectedOutput:[{a:3},{b:2},{c:2},{a:2}]

function arrangeCount(input){
  let count =0
  let output = [];
  let charcter = input[0]
  for(let i=0; i<input.length; i++){
    if(input[i] === charcter){
      count++
    }
    else{
      output.push({[charcter]:count });
      charcter = input[i]
      count =1
    }
  }
  output.push({[charcter]:count });
  return output
}
console.log(arrangeCount(input))


let data = [
    {name: "abc", hobbies: ["test1", "test2", "test3"]},
    {name: "def", hobbies: ["test4", "test5", "test6"]},
    {name: "ghi", hobbies: ["test7", "test8", "test9"]}
];

let transformedData = data.map(item => {
    let newObj = {};
    newObj[item.name] = item.hobbies;
    return newObj;
});

console.log(transformedData);

output [
    { abc: ["test1", "test2", "test3"] },
    { def: ["test4", "test5", "test6"] },
    { ghi: ["test7", "test8", "test9"] }
]
// print prime numbers
function isPrime(n){
  if(n <=1)return false;
  if(n===2) return true;
  for(let i=2;i<n; i++){
    if(n%i===0) return false
  }
  return true
}
console.log(isPrime(4))
function printPrime(num){
  for(let i=2; i<=num; i++){
    if(isPrime(i)){
      console.log(i)
    }
  }
}
printPrime(100)

//less charctr first
let input = "Hello how is going on your health"

let words = input.split(" ")
  words.sort((a,b) => a.length - b.length)
  let final = words.join(' ')
  console.log(final)