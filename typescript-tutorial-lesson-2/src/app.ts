import { Invoice } from "./classes/invoice.js"; 
import { payment } from "./classes/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";
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



const form=document.querySelector('.new-item-form') as HTMLFormElement;


//input

const type= document.querySelector('#type') as HTMLSelectElement;
const toform= document.querySelector('#tofrom') as HTMLInputElement;
const details= document.querySelector('#details') as HTMLInputElement;
const amount= document.querySelector('#amount') as HTMLInputElement;

const ul=document.querySelector('ul') as HTMLUListElement;

const list=new  listTemplate(ul);

form.addEventListener('submit',(e:Event) => {
    e.preventDefault();
    let values:[string,string,number];

 values=[toform.value, details.value,amount.valueAsNumber];

    let doc: HasFormatter;

    if(type.value==='invoice')
        doc=new Invoice(...values);
else    {
    doc=new payment(...values);
}
list.render(doc,type.value,'start');
type.clear();
toform.clear();
details.clear();
amount.clear();

});

// Declare a module to augment the global scope
declare global {
    interface HTMLElement {
      clear(): void;
    }
  }
  
  // Implement the extension method
  HTMLElement.prototype.clear = function () {
    this.innerText = '';
  };


  // implement generic
  const addUID=<T extends {name:string}>(obj:T)=>{
    let uid=Math.floor(Math.random()*100);
    return {...obj,uid}
  }
//   const addUID=<T extends object>(obj:T)=>{
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid}
//   }

  let docOne= addUID({name:'yoyo',age:40});
   
  //let docTwo= addUID({age:40});
  // let docTwo=addUID('yoyo');

  console.log(docOne);
 // console.log(docTwo);
  
//Enums
enum ResourceType {Book,AUTHOR,FILM,DIRECTOR,PERSON}

// with interface

interface Resource<T>{
    uid:number;
 resourcType:ResourceType;
 data:T;
}  
const docTwo: Resource<object>={
    uid:1,
    resourcType:ResourceType.Book,
    data:{name:'yoyo'}
}

const docThree: Resource<string[]>={
    uid:1,
    resourcType:ResourceType.DIRECTOR,
    data:['yoyo','ali']
}

console.log(docTwo,docThree);


//tuples 

let arr=['toyo',true,43]
arr[1]='yoyo';
arr[2]=false;

let tup:[string,number,boolean]=['ali',83,false];

// tup[1]=false;
tup[0]='dias';