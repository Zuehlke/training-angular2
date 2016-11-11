import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';
import { ExpenseDetailComponent } from './components/expense-detail.component';

export const expenseRoutes: Routes = [
  { path: 'overview', component: ExpenseOverviewComponent },
  { path: 'expense/:id', component: ExpenseDetailComponent }
];

export const expenseRouting: ModuleWithProviders = RouterModule.forChild(expenseRoutes);
