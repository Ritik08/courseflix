import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomObserverService } from '../custom-observer.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent {

  constructor( private timeEmitter: CustomObserverService ){}

  data: string = ""

  ngOnInit(){
    this.timeEmitter
  //       .getUpdatedTime()
  //      .subscribe(data => {
  //         this.data = "Start consuming ==== > "+ new Date().toString();
  //          setTimeout(() => {
  //           this.data = data
  //        }, 20000);
          
  //       });
  }



}
