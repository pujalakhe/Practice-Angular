import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name:"CustomPipe"
})
export class CustomPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        //your pipe logic here
        if(typeof value !="string")
            {
                return value;
            }
            return value.toUpperCase();
    }
}