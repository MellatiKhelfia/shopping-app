import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@ub-shop-forontend/material';
const route: Routes = [{ path: '', component: ProductsComponent }];
@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(route), MaterialModule],
})
export class ProductsModule {}
