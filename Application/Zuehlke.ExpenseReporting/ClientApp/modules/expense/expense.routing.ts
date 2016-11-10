import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';
import { ExpenseDetailComponent } from './components/expense-detail.component';
import { ExpenseAddComponent } from './components/expense-add.component';

export const productRoutes: Routes = [
  { path: 'overview', component: ExpenseOverviewComponent },
  { path: 'expense/add', component: ExpenseAddComponent },
  { path: 'expense/:id', component: ExpenseDetailComponent }
];

export const productRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);
