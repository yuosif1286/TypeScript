"use strict";
//Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        console.log(`${this.client} owes # ${this.amount} for ${this.details}`);
    }
}
const invOne = new Invoice('yoyo', 'work in kf', 493);
const invTwo = new Invoice('mohamed', 'work in kf', 898);
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
// const anchor=document.querySelector('a') as HTMLAnchorElement;
// anchor.innerText="yoyo";
// console.log(anchor.href);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//input
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
