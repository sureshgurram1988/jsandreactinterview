

2. sumof two arrays?
let a = [1,2,3,4];
let b = [5,6,7,8];
let result = a.map((a,i) => a+ b[i])
console.log(result)

method-2 
let a= [1,2,3,4];
let b= [4,5,6,7];
let r =[]
function sumArr(arr){
  for(i=0; i<arr.length; i++){
    r.push(a[i] + b[i])
  }
  return r
}
console.log(sumArr(a,b))
console.log(r)

3.Take this array var array = [1,2,3,4,5] and copy it using?
let a = [1,2,3,4];
let result = a.slice();
console.log(a)
console.log(result)
--method 2
let a = [1,2,3,4];
let b = [];
for(let i=0; i<a.length; ++i){
    b[i] =a[i]
}
console.log(b)

4.Empty this array var array = [1,2,3,4,5]

var a = [1,2,3,4,5]
  a= []
  //a.length = 0; we can use this also
  //a.splice(0, a.length) 
  console.log(a)
  ---method 2
  var a = [1,2,3,4,5,6];
console.log(a);
function empArr(arr){
    while(arr.length){
        a.pop()
    }
}
empArr(a)
console.log(a)

5. What type is an Array set to?
Var array3 = [1,2,3,4,5];
console.log(typeof(array3));  // Object 

6 How can you check if something is an Array?

var check = [1, 2, 3];
var a = Array.isArray([1, 2, 3]);
var b = Array.isArray({
  foo: 123
});
var c = Array.isArray('foobar');
var d = Array.isArray(undefined);
var e = Array.isArray(check);

console.log(a); // true
console.log(b); // false
console.log(c); // false
console.log(d); // false
console.log(e); // true

7. Add an item to the end of an array.
var arr = [1,2,3,4,5,6];
arr.push(8)
//arr[arr.length] =8
console.log(arr)

8.Find the index position of d in this array var arr= ['a','b','c','d'];

console.log(arr.indexOf('d')); // 3
9 What will be returned if you look for the index of something that does not exist?

var arr= ['a','b','c','d']; console.log(arr.indexOf(7)); // -1 === does not exist

10. Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar'];

var items =  ['milk', 'bread', 'sugar'];
function checkPro(item){
    if(items.indexOf(item) == -1){
        console.log("item not exist")
    }
    else{
        console.log("item  exist")
    }
}
checkPro("milk")
checkPro("salt")

11.Now you've found milk exists add some code to find the index of milk and remove that item.?
var items =  ['milk', 'bread', 'sugar'];
var a = items.indexOf("milk")
console.log(a)

items.splice(0,1);
console.log(items)
12.List the ways to loop over an array.

For Each

For in

For loop

13.Write some code to put these numbers in order var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];
var arr = [1, 12, 2 ,23,77,7,33,5,99,234];
let result = arr.sort((a,b) => a-b);
console.log(result)
for Stringvar arr = ['a','z','e','y'];
let result = arr.sort();
console.log(result)
// we canuse reverse() for reverse order b-a
14.Using reduce add all these numbers var numbers = [1, 2, 3, 4, 5, 6];

var numbers = [1, 2, 3, 4, 5, 6];

var total = numbers.reduce((a, b) => {
  return a + b;
});

console.log(total); // Total returned is : 21

15. Flatten this array to one single array using reduce Var array = [[0, 1], [2, 3], [4, 5]];
var arr =  [[0, 1], [2, 3], [4, 5]];

var flattened = arr.reduce((a,b) => {
    return a.concat(b)
})
console.log(flattened)
16 single to multiple arry or chunk array?
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function chunkArray(arr,val){
    let result = [];
    while(arr.length){
        result.push(arr.splice(0, val))
    }
    return result
}
let finalResult = chunkArray(nums,3)
console.log(finalResult)

16. Filter this array to return just the dogs

var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]

var dog = animals.filter((animals) => {
    return  animals.species === "dog"
})
console.log(dog)

17 Using array in question 19 use map function to return all the species
var types = animals.map(function(animals){
    return animals.species;
});
console.log(types); // [ 'rabbit', 'dog', 'owl', 'fish', 'rat', 'cat' ]

18. How would you double elements of an array without creating additional variables using reduce?
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
const result = numbers.reduce((val, i) => val.concat([i, i]), [])
console.log(result)

19:Array destructuring
var arr = ["Hello", "World"]  
  
// destructuring assignment  
var [first, second] = arr;  
  
console.log(first); // Hello  
console.log(second); // World  

20. What do you understand by the JavaScript Map Array function?
map() creates a new array from calling a function for every array element. 
map() calls a function once for each element in an array. 
map() does not execute the function for empty elements. 
map() does not change the original array.

// --------------------------------//
21.How would you use arrays to swap variables in JS?
var arr=["first", "second", "third", "fourth", "fifth"];
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp
console.log(arr)

22. How would you fill static values in a given array in JS?

var arr=["first", "second", "third", "fourth", "fifth"];
let result = arr.fill("sixth", 1, 3);
console.log(arr)
//through loop
	var arr=["first", "second", "third", "fourth", "fifth"];
for(let i=0; i<arr.length; i++){
    arr[i] = "filled";
}
console.log(arr)
//method -2
const len = 5
const arr = [];
for(let i=0; i<len; i++ ){
    arr.push("filled")
}
console.log(arr)

In how many ways can you create an array in JS?
There are three different ways of creating an array in JavaScript, namely:

By creating instance of an array:
var someArray = new Array();
By using an array constructor:
var someArray = new Array(‘value1’, ‘value2’,…, ‘valueN’);
By using an array literal:
var someArray = [value1, value2,…., valueN];

23sum of multiple arrys
function sum_array(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            sum+= arr[i][j]
        }
    }
    return sum;
}
let result = sum_array([[1,2], [3,4], [4,5]])
console.log(result)

24.How would you check if a number is an integer?
function inInt(num){
    return num % 1 == 0
}

console.log(inInt(4))

25 Write a function that would allow you to do this?
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(basenumber){
    return function (n){
        return basenumber + n
    }
}
console.log(addSix(10))
console.log(addSix(21))

26 FizzBuzz Challenge

for(let i=0; i<100; i++){
    let f = i % 3 ==0;
    b = i% 5 ==0;
    console.log(f? (b? "fizzbuzz" : "fizz"):b? "buzz" : i)
}
27 How would you create a private variable in JavaScript?
function privVar(){
  var priv ="password";
  return function(){
      return priv
  }
}
var getPriv = privVar();
console.log(getPriv())

28. Find max and min value of array
let points = [1, 5, 3, 2]
function finmax(arr){
let len =arr.length;
let min = Infinity;
while(len--){
  if(arr[len]<min){
      min = arr[len]
    
  }
}
return min
}
console.log(finmax(points))
// max value
let points = [1, 5, 3, 2]
function finmax(arr){
let len =arr.length;
let max = -Infinity;
while(len--){
  if(arr[len]>max){
      max = arr[len]
    
  }
}
return max
}
console.log(finmax(points))
--method 2
let points = [1, 5, 3, 2]
let result = Math.max.apply(null, points)
console.log(result)
291.	Write a program to cyclically rotate an array by one

const rotate = (arr) => {
  let a = [arr[arr.length - 1]];
  for (let i = 0; i < arr.length - 1; i++) {
    a.push(arr[i]);
  }
  return a;
};
console.log(rotate([1, 2, 3, 4, 5]));

30. Find the missing integer
var a = [5],
 count = 5;
var missing = new Array();

for (var i = 1; i <= count; i++) {
if (a.indexOf(i) == -1) {
 missing.push(i);
 }
}
console.log(missing); // to check the result.
31. Find duplicates in an array
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
const unique = Array.from(new Set(numbers));
console.log(unique);
32.check if there were duplicate items in the original array
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
const unique = Array.from(new Set(numbers));
if(numbers.length === unique.length) {
    console.log(`Array doesn't contain duplicates.`);
} else {
    console.log(`Array contains duplicates.`);
}
// Output: Array contains duplicates.
33. const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
const set = new Set(numbers);
const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});
console.log(duplicates);
// [ 2, 5 ]
34. Inter section arr?
let a = [1,2,3,5]
let b = [2,5, 6,7]
const interSection = a.filter(val => b.includes(val));
console.log(interSection)

write only odd numbers given array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let odd = arr.filter(n => n%2);
console.log(odd)
only even numbers?
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
let even = arr.filter(n => n%2 ===0);
console.log(even)
//loop Method
var arr = [1,2,3,4,5,6,7,8,9,10,12];
      let sum=0;
      for(let i=0; i<arr.length; i++){
        if(arr[i] %2){
          sum+= arr[i]
          console.log(arr[i])
        }
      }
      console.log(sum)
      repeat even number only ?
      var arr = [1,2,3,4,5,6,7,8,9,10,12];
      const repeatEvenNum = arr => {
       let end = arr.length-1;
       for(let i=end; i>0; --i){
         if(arr[i] % 2 ===0){
           arr.splice(i, 0, arr[i])
         }
       }
       return arr
      }
      console.log(repeatEvenNum(arr))