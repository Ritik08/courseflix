import { Component, OnInit } from '@angular/core';
import { CustomObserverService } from '../custom-observer.service';

@Component({
  selector: 'app-time-ticker',
  template:  `
   <h1>Current Date: {{data }}</h1>
  `,
  styleUrls: ['./time-ticker.component.css']
})
export class TimeTickerComponent implements OnInit {
  constructor( private timeEmitter: CustomObserverService ){}

  data: any

  ngOnInit(){
    this.timeEmitter
        // .getUpdatedTime()
        // .subscribe(data => {
        //   this.data = "Start consuming ==== > "+ new Date().toString();
        //   setTimeout(() => {
        //     this.data = data
        //   }, 10000);
          
        // });
  }


}
