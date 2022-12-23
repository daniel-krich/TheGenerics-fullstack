import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayMonthFormatter'
})
export class DayMonthFormatterPipe implements PipeTransform {

    transform(date: Date): string {
        return date.toLocaleString('us', { month: 'long', day: '2-digit' })
    }

}
