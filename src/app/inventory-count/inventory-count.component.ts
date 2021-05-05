import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-count',
  templateUrl: './inventory-count.component.html',
  styleUrls: ['./inventory-count.component.css']
})
export class InventoryCountComponent implements OnInit {

  constructor(private inventoryService: InventoryService) { }
  inventoryCount: number = 0

  ngOnInit(): void {
    this.inventoryService
          .inventoryChanged
          .subscribe(inventoryCount => this.inventoryCount = inventoryCount);
  }
    
  }
