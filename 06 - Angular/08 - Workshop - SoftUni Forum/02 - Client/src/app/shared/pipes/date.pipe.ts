import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any): string {
    value = new Date(value);
    const y = value.getFullYear();
    const m = (value.getMonth() + 1).toString().padStart(2, '0');
    const d = value.getDate().toString().padStart(2, '0');
    const h = value.getHours().toString().padStart(2, '0');
    const min = value.getMinutes().toString().padStart(2, '0');
    const sec = value.getSeconds().toString().padStart(2, '0');

    return `${y}-${m}-${d} ${h}:${min}:${sec}`;
  }
}
