import { HasFormatter } from "../interface/HasFormatter.js";

//Classes

export class payment implements HasFormatter {
    constructor (
        readonly recipient:string,
        private details:string,
        public amount:number)
    {
    }
    
    format(){
       return`${this.recipient} is owed  # ${this.amount} for ${this.details}`;
    }
    }
    