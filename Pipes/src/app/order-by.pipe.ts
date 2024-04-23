import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any,order: "asc" | "desc"){
    //for objects
    return value.sort((a:any,b:any)=>
      {                                                                                     
        if(order=="asc")
        {
          return a.cost-b.cost;
        }
        else if (order === "desc") {
          return b.cost - a.cost;
        }
        return 0;
    });
    //for numbers
    // return value.sort((a:any,b:any)=>
    //   {
    //     if(order=="asc")
    //     {
    //       return a-b;
    //     }
    //     else if (order === "desc") {
    //       return b - a;
    //     }
    //     return 0;
    // });
    //For alphabets
    // if(order=="asc")
    //   {
    //     return value.sort()
    //   }
    //   else if(order=="desc")
    //     {
    //       return value.reverse();
    //     }
    //   return value;
  }

}
