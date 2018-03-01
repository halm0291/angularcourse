import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'title'
})

export class TitlePipe implements PipeTransform{
    transform(value: string ,args?: any){
        if(!value)
           return null;
        let titleArray = value.split(" ");
        let connectors =["of","the"];
        let titleResponse:string="";
        titleArray.forEach(element => {
            
            if(connectors.includes(element.toLowerCase()))
               titleResponse+=element.toLowerCase() +" ";
            else
               titleResponse+=element.charAt(0).toUpperCase()+element.slice(1).toLowerCase()+" ";
        });
        return titleResponse;
    }
}