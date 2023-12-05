"use strict";
// let greet= () => {
//     console.log("hello , world");
// }
let greet;
// greet='hello';
greet = () => {
    console.log("Hello , world");
};
greet();
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 3, "yoyo");
const minus = (a, b) => a - b;
let result = minus(45, 5);
console.log(result);
