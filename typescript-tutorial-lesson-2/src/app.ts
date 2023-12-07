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