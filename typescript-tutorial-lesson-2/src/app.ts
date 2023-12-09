//Classes

class Invoice{
client: string;
details:string;
amount:number;


constructor (c:string,d:string,a:number)
{
    this.client=c;
    this.details=d;
    this.amount=a;
}

format(){
    console.log(`${this.client} owes # ${this.amount} for ${this.details}`);
}
}

const invOne= new Invoice('yoyo','work in kf',493);
const invTwo= new Invoice('mohamed','work in kf',898);


let invoices : Invoice[]=[];

invoices.push(invOne,invTwo); 

console.log(invoices);


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