// Array
// It is a common practice to declare arrays with the const keyword.
// An array declared with const cannot be reassigned
// You can change the elements of a constant array
const cars = ["Audi", "Porsche", "BMW" ];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(cars.length);
cars.sort();
console.log(cars);

console.log("with for loop")
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log("with forEach loop")
cars.forEach(element => {
    console.log(element)
});

cars.push("Toyota");
console.log(cars);

console.log(Array.isArray(cars));

console.log(cars.join(", "));

cars.pop()
console.log("after pop")
console.log(cars);

cars.push("Toyota");
console.log("after pop")
console.log(cars);

cars.shift();
console.log(cars);

console.log(cars.shift());

cars.unshift("BMW");
console.log(cars);

console.log(cars.unshift("Audi"));

delete cars[0];
console.log(cars);

cars[0] = "Audi";
console.log(cars);

//splice
cars.splice(3, 0, "Tata", "Tesla");
console.log(cars);

var cars2 = cars.slice(3, 6);
console.log(cars2);


console.log("To String")
console.log(cars.toString());

console.log("sort")
console.log(cars.sort());

console.log("reverse")
console.log(cars.reverse());


// Numeric sort 
const points = [40, 100, 1, 5, 25, 10];
console.log("Ascending order");
points.sort(function(a, b){return a - b});
console.log(points);

console.log("Descending order");
points.sort(function(a, b){return b - a});
console.log(points);

console.log("Max")
console.log(Math.max.apply(null, points))

console.log("Min")
console.log(Math.min.apply(null, points))


// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
const points1 = points.map(myFunction1);
// (value) => {return value * 2} arrow function
function myFunction1(value) {
    return value * 2;
}
console.log("map");
console.log(points1);


// The filter() method creates a new array with array elements that pass a test.
const points2 = points1.filter(myFunction2);
function myFunction2(value) {
    return value > 40;
}
console.log("filter");
console.log(points2);


// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.
var sum = points1.reduce(myFunction3); //answer is sum of element
// var sum = points1.reduce(myFunction3, 500); 
//answer is sum of element + specified value
function myFunction3(total, value) {
    // console.log(total + value);
    return total + value
}
console.log(sum);

// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
// The reduceRight() works from right-to-left in the array. See also reduce().
// same as reduce but take elements from right to left


// The every() method checks if all array values pass a test.
// The some() method checks if some array values pass a test.
const points4 = points1.every(myFunction2);
// const points4 = points1.some(myFunction2);
console.log("is every element is grater than 40?")
console.log(points4);

// The Array.indexOf() method searches an array for an element value and returns its position.
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// starts from 0 so if you want real time index do +1.
const num1 = points1.find(myFunction2);
console.log(num1);

// The findIndex() method returns the index of the first array element that passes a test function.
const num2 = points1.findIndex(myFunction2);
console.log(num2);


// The Array.from() method returns an Array object from any object with a length property or any iterable object.
const str_arr_1 = Array.from("abcdefghij")
console.log(str_arr_1);

// The Array.keys() method returns an Array Iterator object with the keys of an array.
const keys = str_arr_1.keys();
for (let x of keys) {
    console.log(x + "   " + str_arr_1[x]);
}

// The entries() method returns an Array Iterator object with key/value pairs:
const entries = str_arr_1.entries();
for (let x of entries) {
    console.log(x);
}

// Array.includes() to arrays. This allows us to check if an element is present in an array
// console.log(str_arr_1.includes("k")) // returns false
console.log(str_arr_1.includes("c"))    // returns true

// spread (...)
// The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);


