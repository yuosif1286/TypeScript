// let greet= () => {
//     console.log("hello , world");
    
// }

let greet :Function;
// greet='hello';

greet =() => {console.log("Hello , world");
}

greet();

const add = (a:number,b: number,c:number|string =  10)=>{
    console.log(a+b);
    console.log(c);
}

add(5,3,"yoyo");

const minus =(a: number ,b : number) => a-b;

let result= minus(45,5);

console.log(result);
