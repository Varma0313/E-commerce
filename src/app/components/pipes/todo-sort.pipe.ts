import { Pipe, PipeTransform } from '@angular/core';
import { IToDo } from '../interface/to-do-interface';

@Pipe({
  name: 'todoSort',
  standalone: true,
})
export class TodoSortPipe implements PipeTransform {
  transform(value: any, sortBy?: 'completed' | 'created' | null): any {
    console.log('check Value', value);
    if (!sortBy) return this.sortByTimeDesc(value);
    if (sortBy) return [];
    return value;
  }

  sortByTimeDesc(arr: IToDo[]) {
    return arr.sort((a: IToDo, b: IToDo) => {
      return a.time - b.time;
    });
  }
}
