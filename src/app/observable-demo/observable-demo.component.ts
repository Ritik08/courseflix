import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ObservableService} from '../observable.service'
import {mergeMap} from "rxjs/operators"

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  constructor(private observable:ObservableService) { }
// data:Observable<string[]>| undefined;
message:string| undefined;
  ngOnInit(): void {

// this.data= this.ObservableService.number();


this.observable.number()
.pipe(
mergeMap(data=>of(`Recieved the ${data}`))
).subscribe(message=>this.message=message);
// this.message= this.ObservableService.message();

}

}
