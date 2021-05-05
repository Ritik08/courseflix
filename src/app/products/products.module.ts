import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "products",
      component: ProductsComponent
    },
    { 
      path: "products/:id",
      component: ProductDetailsComponent
    }
])
  ],
exports:[
RouterModule
]
})
export class ProductsModule { }
