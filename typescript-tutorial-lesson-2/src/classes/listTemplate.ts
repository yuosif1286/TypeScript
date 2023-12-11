import { HasFormatter } from "../interface/HasFormatter.js";

export class listTemplate{

    constructor(private container:HTMLUListElement)
    {
    }

    render(item:HasFormatter,heading:string,pos:'start'|'end')
    {
        const li=document.createElement('li');

        const h4=document.createElement('h4');
        h4.innerText=heading;
        li.append(h4);

        const p= document.createElement('p');
        p.innerText=item.format();
        li.append(p);

        if(pos==='start')
        this.container.append(li);
        else
        this.container.append(li);
    }
}