//// Math



console.log("celi");
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.2));
console.log(Math.ceil(4.9));
console.log(Math.ceil(-4.2));


console.log("floor");
console.log(Math.floor(4.9));
console.log(Math.floor(-4.2));


console.log("truncat");
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.2));


console.log("Sign");
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));


console.log(Math.pow(5, 2));
console.log(Math.sqrt(25));
console.log(Math.abs(-7.123));
console.log(Math.sin(90 * Math.PI / 180));
console.log(Math.cos(0 * Math.PI / 180));
console.log(Math.min(0, 10, -10, 20, 454, 300));
console.log(Math.max(0, 10, -10, 20, 454, 300));
console.log(Math.random());
console.log(Math.log(10));
console.log(Math.log2(10));
console.log(Math.log10(10));


// Random
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));    //return 0 to 9
console.log(Math.floor(Math.random() * 11));    //return 0 to 10
console.log(Math.floor(Math.random() * 100));   //return 0 to 99
console.log(Math.floor(Math.random() * 101));   //return 0 to 100


// Boolean
// Normally JavaScript booleans are primitive values created from literals:
// let x = false;               //type boolean
// But booleans can also be defined as objects with the keyword new:
// let y = new Boolean(false);  //type object


// ?? operator
// The ?? operator returns the first argument if it is not nullish (null or undefined).
// Otherwise it returns the second argument.
let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);


// ?. operator
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car?.name);



//// Conditions
if (true) {
    console.log("if true");
} else {
    console.log("if false")
}
if (false) {
    console.log("if true");
} else {
    console.log("if false")
}

var x = Math.floor((Math.random() * 10) + 1)

switch (x) {
    case 1:
        console.log("x is 1");
        break;
    case 2:
        console.log("x is 2");
        break;
    case 3:
        console.log("x is 3");
        break;
    case 4:
        console.log("x is 4");
        break;
    case 5:
        console.log("x is 5");
        break;
    case 6:
        console.log("x is 6");
        break;
    case 7:
        console.log("x is 7");
        break;
    case 8:
        console.log("x is 8");
        break;
    case 9:
        console.log("x is 9");
        break;
    case 10:
        console.log("x is 10");
        break;
    default:
        console.log("error");
        break;
}



const fruits = ["apple", "mango", "watermelon", "kiwi", "orange"];

console.log("with for loop")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("with for in loop")
for (const key in fruits) {
    console.log(fruits[key]);
}

console.log("with forEach loop")
fruits.forEach(x => {
    console.log(x);
});

console.log("with for of loop")
for (const x of fruits) {
    console.log(x);
}

console.log();
console.log();



const letters = new Set(["a","b","c"]);
const myIterator = letters.entries();

// List all Values
for (const entry of myIterator) {
    console.log(entry);
}