import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {Pipe, PipeTransform} from '@angular/core';


dayjs.extend(utc);
dayjs.extend(customParseFormat);


@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {
  transform(date: Date): string {
    if (!date) return '';
    return dayjs.utc(date).format('YYYY-MM-DD h:mm A');
  }

}
