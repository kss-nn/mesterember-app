import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User | User[], phrase: string, key: string = ''): User | User[] {

    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    phrase = ('' + phrase).toLowerCase();

    return value.filter( item => {
      const strItem: string = ('' + item[key]).toLowerCase();
      return strItem.includes(phrase);
    });

  }

}
