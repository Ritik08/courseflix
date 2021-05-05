import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservableService {
 number():Observable<number>{

return of(100,200,300,400)

}
message ():Observable<string>{

return of("lets Start man")

}
  constructor() { }
}
