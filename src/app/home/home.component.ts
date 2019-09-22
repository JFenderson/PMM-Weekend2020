import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  Inject,
  LOCALE_ID
} from '@angular/core';
import { formatDate } from '@angular/common';
import { compareAsc, format } from 'date-fns';
import {
  CountdownComponent,
  CountdownConfig,
  CountdownEvent
} from 'ngx-countdown';
// import { Time, CountdownService } from '../countdown.service';
import { interval, Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor() { }

// deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

//   getTimeRemaining(endtime): any {
//     const t = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor((t / 1000) % 60);
//     const minutes = Math.floor((t / 1000 / 60) % 60);
//     const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//       total: t,
//       days,
//       hours,
//       minutes,
//       seconds
//     };
//   }

//   initializeClock = (id, endtime): any {
//     let clock = document.getElementById(id);
//     let daysSpan = clock.querySelector('.days');
//     let hoursSpan = clock.querySelector('.hours');
//     let minutesSpan = clock.querySelector('.minutes');
//     let secondsSpan = clock.querySelector('.seconds');

//     function updateClock() {
//       let t = getTimeRemaining(endtime);

//       daysSpan.innerHTML = t.days;
//       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }

//     updateClock();
//     let timeinterval = setInterval(updateClock, 1000);
//   }
// initializeClock('clockdiv', deadline);

ngOnInit() {

}
}
