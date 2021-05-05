import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

 constructor(private inventoryService: InventoryService) { }
  inventoryCount: number = 0
  inventoryServiceSubscription: any;

  ngOnInit(): void {
  this.inventoryServiceSubscription =  this.inventoryService
          .inventoryChanged
          .subscribe(inventoryCount => this.inventoryCount = inventoryCount);
  }

  updateInventory(){
      this.inventoryService.sell();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inventoryServiceSubscription.unsubscribe();
  }

}
