"use strict";
//Classes
class Invoice {
    // readonly client: string;
    //  details:string;
    // // private details:string;
    // public amount:number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client=c;
        // this.details=d;
        // this.amount=a;
    }
    format() {
        console.log(`${this.client} owes # ${this.amount} for ${this.details}`);
    }
}
const invOne = new Invoice('ali', 'work in kf', 493);
const invTwo = new Invoice('mohamed', 'work in kf', 898);
// invOne.client='alil';
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(invo => {
    console.log(invo.client, invo.amount, invo.format());
});
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
