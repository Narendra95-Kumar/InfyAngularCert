import { Pipe, PipeTransform } from '@angular/core';


/*
It should filter the products array based on category type

Sample Products:[
    {
      "id": 1,
       ....
       ....
      "category": "clock"
    },
    {
      "id": 2,
       ....
       ....
      "category": "pottery"
    }, ...
]

For category: clock

Output: 
    [ {
      "id": 1,
       ....
       ....
      "category": "clock"
    }
]
*/



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], category: string): any[] {
    return null
  }

}
