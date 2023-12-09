import { Invoice } from "./classes/invoice.js";
const me = {
    name: 'yoyo',
    age: 64,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`i spend ${amount}`);
        return amount;
    }
};
const greetPerson = (isperson) => {
    console.log('helloe', isperson.name);
};
greetPerson(me);
const invOne = new Invoice('ali', 'work in kf', 493);
const invTwo = new Invoice('mohamed', 'work in kf', 898);
// invOne.client='alil';
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(invo => {
    console.log(invo.client, invo.amount, invo.format());
});
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
