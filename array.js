// Array
// It is a common practice to declare arrays with the const keyword.
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