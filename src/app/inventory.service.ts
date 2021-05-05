import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  inventoryCount: number = 10;

  private inventorySubject = new BehaviorSubject(this.inventoryCount);

   inventoryChanged = this.inventorySubject.asObservable();

   buy(){
    ++this.inventoryCount;
    this.inventorySubject.next(this.inventoryCount);
   }
   sell(){
    --this.inventoryCount;
    this.inventorySubject.next(this.inventoryCount);
   }

}
