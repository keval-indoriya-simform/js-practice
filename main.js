//to change html content use innerHTML
function function1() {
    document.getElementById('f1').innerHTML = "hello";
}





// to change CSS use style 
function bold() {
    document.getElementById('f1').style.fontWeight = "900";
}

function unbold() {
    document.getElementById('f1').style.fontWeight = "100";
}

function hide() {
    document.getElementById('f1').style.display = "none";
}

function see() {
    document.getElementById('f1').style.display = "block";
}





//declearing variable  keywords = var, let, const
// 4 Ways to Declare a JavaScript Variable:
// Using var
// Using let
// Using const
// Using nothing

//1st method with let keyword
// you can not redeclear
let x, y;

//2nd method with var keyword
var z;   // do same as let keyword
x = 71;
y = 23;
z = x + y;

var z ;
//you can redeclear the variable with var keyword and it don't loose it's value

console.log(z);

//3rd method with const
//only declear value while declearing the variable
//you can not redeclear
const pi = 3.14;
console.log(pi);

// pi = 3;     this will give error


//4th method using nothing
k = 23;
console.log(k); 





// constant Arrays 
const fruits = ["orange", "apple", "grapes"];
console.log("before change");
console.log(fruits);

//we can change element
fruits[0] = "watermelon";
console.log("after change");
console.log(fruits);

//we can add an elements
fruits.push("orange");
console.log("after adding elements");
console.log(fruits);

//we can remove last element
fruits.pop();
console.log(fruits);

//but can not reassign the array
// fruits = ["1", "2", "3"]

// constant Object
//can not reassign
const fruit = { type:"Orange", color:"Orange", shape:"round" };
console.log(fruit);

//we can change property
fruit.color = "green";

//we can add property
fruit.flovour = "citrus";
console.log(fruit);





// There are different types of JavaScript operators:
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Conditional Operators
// Type Operators

// Arithmetic Operators
//   +  	Addition (concate strings)
//   -  	Subtraction
//   *  	Multiplication
//   ** 	Exponentiation
//   /  	Division
//   %  	Modulus (Division Remainder)
//   ++ 	Increment
//   -- 	Decrement

// Comparison Operators
//   ==	    equal to
//   ===	equal value and equal type
//   != 	not equal
//   !==	not equal value or not equal type
//   >  	greater than
//   <  	less than
//   >= 	greater than or equal to
//   <= 	less than or equal to
//   ?  	ternary operator

// Logical Operators
//   && 	logical and
//   || 	logical or
//   !  	logical not

// Type Operators
//   typeof 	    Returns the type of a variable
//   instanceof 	Returns true if an object is an instance of an object type





// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:
// 1. An object
// 2. An array
// 3. A date





//object
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName());






// string methods
let testText = "this is just a random text just a random text";
// String length
length = testText.length;
console.log(length);

// String slice()
s1 = testText.slice(3,15);
console.log(s1);

s1 = testText.slice(-15,-3);
console.log(s1);

// String substring()
s1 = testText.substring(5, 15);
console.log(s1);

// String substr()
//it takes 7 charecter from 5th index
s1 = testText.substr(5, 7);
console.log(s1);

// String replace()
//The replace() method replaces only the first match
// String replaceAll() replace all match
s1 = testText.replace("random", "randomly random");
console.log(s1);

// String toUpperCase()
s1 = testText.toUpperCase();
console.log(s1);

// String toLowerCase()
s1 = testText.toLowerCase();
console.log(s1);

// String concat()
let str1 = "hello";
let str2 = "there";
let str3 = str1.concat(" ", str2);
console.log(str3);

// String trim()
let trim_str = "        this is trim string         "; 
s1 = trim_str.trim();
console.log(s1);

// String trimStart()
s1 = trim_str.trimStart();
console.log(s1);

// String trimEnd()
s1 = trim_str.trimEnd();
console.log(s1);

// String padStart()
s1 = str1.padStart(8, "h");
console.log(s1);

// String padEnd()
s1 = str1.padEnd(8, "o");
console.log(s1);

// String charAt()
s1 = str1.charAt(0);
console.log(s1);

// s1[0] = "a"
//gives no error but does not work
// read only can not modify
// console.log(s1);

// String charCodeAt()
s1 = str1.charCodeAt(0);
console.log(s1);

// String split()
let str_array = testText.split(" ");
console.log(str_array);


// testText = "this is just a random text just a random text"
// String indexOf()
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
console.log(testText.indexOf("just"));

// String lastIndexOf()
console.log(testText.lastIndexOf("just"));
// console.log(testText.lastIndexOf("just", 35)); 

// String search()
console.log(testText.search("random"));

// String match()
console.log(testText.match(/just/g));

// String matchAll()
const itr = testText.matchAll(/just/g);
console.log(Array.from(itr));

// String includes()
// retuen true or false
console.log(testText.includes("random"));


// String startsWith()
console.log(testText.startsWith("this"));
// console.log(testText.startsWith("is", 5));
// start comparing from 5th positions

// String endsWith()
console.log(testText.endsWith("text"));





// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
//   };

s1 = `Hello, ${person.fullName()}`;
console.log(s1);