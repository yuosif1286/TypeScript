import { Invoice } from "./classes/invoice.js";
import { payment } from "./classes/Payment.js";
import { listTemplate } from "./classes/listTemplate.js";
// interface
// let docOne: HasFormatter;
// let docTow: HasFormatter;
// docOne=new Invoice('yoyo','dwkhwdiwd',343);
// docTow=new payment('ali','wduidwodw',64);
// let docs:HasFormatter[]=[];
// docs.push(docOne,docTow);
// console.log(docs);
// interface person{
//     name: string;
//     age:number;
//     speak(a:string) : void;
//     spend(a:number):number;
// }
// const me : person={
//     name:'yoyo',
//     age:64
//     ,
//     speak(text: string):void{
//         console.log(text);
//     },
//     spend(amount : number) : number
//     {
//         console.log(`i spend ${amount}`);
//         return amount;
//     }
// }
// const greetPerson=( isperson: person)=>{
//     console.log('helloe',isperson.name);
// }
// greetPerson(me);
// const invOne= new Invoice('ali','work in kf',493);
// const invTwo= new Invoice('mohamed','work in kf',898);
// // invOne.client='alil';
// let invoices : Invoice[]=[];
// invoices.push(invOne,invTwo); 
// invoices.forEach(invo => {
//     console.log(invo.client,invo.amount,invo.format());
// });
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice')
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    else {
        doc = new payment(toform.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
    type.clear();
    toform.clear();
    details.clear();
    amount.clear();
});
// Implement the extension method
HTMLElement.prototype.clear = function () {
    this.innerText = '';
};
