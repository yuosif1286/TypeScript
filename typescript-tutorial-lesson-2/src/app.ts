//Classes

class Invoice{
// readonly client: string;
//  details:string;
// // private details:string;
// public amount:number;


constructor (readonly client:string,private details:string,public amount:number)
{
    // this.client=c;
    // this.details=d;
    // this.amount=a;
}

format(){
    console.log(`${this.client} owes # ${this.amount} for ${this.details}`);
}
}


const invOne= new Invoice('ali','work in kf',493);
const invTwo= new Invoice('mohamed','work in kf',898);

// invOne.client='alil';

let invoices : Invoice[]=[];

invoices.push(invOne,invTwo); 

invoices.forEach(invo => {
    console.log(invo.client,invo.amount,invo.format());
});

// const anchor=document.querySelector('a') as HTMLAnchorElement;
// anchor.innerText="yoyo";
// console.log(anchor.href);


const form=document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

//input

const type= document.querySelector('#type') as HTMLSelectElement;
const toform= document.querySelector('#tofrom') as HTMLInputElement;
const details= document.querySelector('#details') as HTMLInputElement;
const amount= document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit',(e:Event) => {
    e.preventDefault();
    console.log(type.value,
        toform.value,
        details.value,
        amount.valueAsNumber);
    
})