"use strict";
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
