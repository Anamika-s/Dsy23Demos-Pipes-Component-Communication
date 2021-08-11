import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Gender'
})
export class GenderPipe implements PipeTransform {

  transform(name : string , gender : string): string {
    if(gender=='Male')
    return "Mr." + name;
    else if(gender=='Female')
    return "Ms." + name;
    }

}
