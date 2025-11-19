import { Routes } from '@angular/router';
import { Item } from './item/item';
import { Unit } from './unit/unit';
import { Category } from './category/category';
import { Supplier } from './supplier/supplier';
import { Customer } from './customer/customer';

export const routes: Routes = [
  { path: 'item', component: Item},
  { path: 'unit', component: Unit },
  { path: 'category', component: Category },
  { path: 'supplier', component: Supplier },
  { path: 'customer', component: Customer },
  { path: '', redirectTo: 'item', pathMatch: 'full' }
];