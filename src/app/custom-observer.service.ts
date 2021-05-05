import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomObserverService {
  getUpdatedTime(): Observable<string>{
    return new Observable<string>(observer => {
      setInterval(() => {
        observer.next(new Date().toString())
      }, 1000);
    })
  }
}
