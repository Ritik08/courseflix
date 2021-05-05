import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  constructor(private inventoryService: InventoryService) { }
  inventoryCount: number = 0
  inventoryServiceSubscription: any;

  ngOnInit(): void {
  this.inventoryServiceSubscription =  this.inventoryService
          .inventoryChanged
          .subscribe(inventoryCount => this.inventoryCount = inventoryCount);
  }

  updateInventory(){
      this.inventoryService.buy();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inventoryServiceSubscription.unsubscribe();
  }

}
