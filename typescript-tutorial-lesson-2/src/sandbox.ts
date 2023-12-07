let greet : (a: string,b: string)=>void;

greet=(name:string ,greeting: string)=>
console.log(`${name} says ${greeting}`);

let calc:(a: number ,b:number, c:string)=> number;
calc=(numOne:number, numtwo:number,action: string)=> numOne+ numtwo;

calc=(numOne:number, numtwo:number,action:string) =>
{
    if(action==='add')
    {
      return numOne+ numtwo;
    }
    else
    {
        return numOne-numtwo;
    }
}
let  logDetails :(obj:{name:string,age:number})=> void;

logDetails=(employee:{name:string,age:number})=> console.log(employee.name,employee.age);
