"use strict";
let greet;
greet = (name, greeting) => console.log(`${name} says ${greeting}`);
let calc;
calc = (numOne, numtwo, action) => numOne + numtwo;
calc = (numOne, numtwo, action) => {
    if (action === 'add') {
        return numOne + numtwo;
    }
    else {
        return numOne - numtwo;
    }
};
let logDetails;
logDetails = (employee) => console.log(employee.name, employee.age);
