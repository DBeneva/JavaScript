import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) { }

  transform(value: string): string {
    const timePassed = Number(new Date()) - Number(new Date(value));

    if (timePassed < 60000) {
      return `${Math.floor(timePassed / 1000)} seconds`;
    }
    if (timePassed < 60000 * 60) {
      return `${Math.floor(timePassed / 60000)} minutes`;
    }
    if (timePassed < 60000 * 60 * 24) {
      return `${Math.floor(timePassed / (60000 * 60))} hours`;
    }
    if (timePassed < 60000 * 60 * 24 * 30) {
      return `${Math.floor(timePassed / (60000 * 60 * 24))} days`;
    }
    if (timePassed < 60000 * 60 * 24 * 30 * 12) {
      return `${Math.floor(timePassed / (60000 * 60 * 24 * 30))} months`;
    }
    return `${Math.floor(timePassed / (60000 * 60 * 24 * 30 * 12))} years`;
  }



  //   const msPerMinute = 60 * 1000;
  //   const msPerHour = msPerMinute * 60;
  //   const msPerDay = msPerHour * 24;
  //   const msPerMonth = msPerDay * 30;
  //   const msPerYear = msPerMonth * 12;

  //   if (timePassed < msPerMinute) {
  //     return `${Math.floor(timePassed / 1000)} seconds`;
  //   }
  //   if (timePassed < msPerHour) {
  //     return `${Math.floor(timePassed / msPerMinute)} minutes`;
  //   }
  //   if (timePassed < msPerDay) {
  //     return `${Math.floor(timePassed / msPerHour)} hours`;
  //   }
  //   if (timePassed < msPerMonth) {
  //     return `${Math.floor(timePassed / msPerDay)} days`;
  //   }
  //   if (timePassed < msPerYear) {
  //     return `${Math.floor(timePassed / msPerMonth)} months`;
  //   }
  //   return `${Math.floor(timePassed / msPerYear)} years`;
  // }
}
