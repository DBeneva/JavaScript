import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnDestroy {
  timeSubsc!: Subscription;
  time$ = interval(1000).pipe(
    startWith(''),
    map(() => new Date())
  );
  time!: Date;

  constructor() {
    this.timeSubsc = this.time$.subscribe(timeValue => this.time = timeValue);
  }

  ngOnDestroy(): void {
    this.timeSubsc.unsubscribe();
  }

}
