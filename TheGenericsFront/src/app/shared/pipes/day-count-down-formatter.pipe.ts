import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCountDownFormatter'
})
export class DateCountDownFormatterPipe implements PipeTransform {

    transform(date: Date): string {
        const currTime: number = new Date().getTime();
        const timeDiff: number = Math.abs(date.getTime() - currTime);
        const days: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes: number = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds: number = Math.floor((timeDiff % (1000 * 60)) / 1000);

        const coutDownTerm: string = date.getTime() > currTime ? 'left' : 'ago';

        if(days) {
            return `${days} day(s) ${coutDownTerm}`;
        }
        else if(hours) {
            return `${days} hour(s) ${coutDownTerm}`;
        }
        else if(minutes) {
            return `${minutes} minute(s) ${coutDownTerm}`;
        }
        else {
            return `${seconds} second(s) ${coutDownTerm}`;
        }
    }

}
