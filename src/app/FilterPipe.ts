/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: '[filterPipe]'
})
export class [filterPipe]Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

} */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}