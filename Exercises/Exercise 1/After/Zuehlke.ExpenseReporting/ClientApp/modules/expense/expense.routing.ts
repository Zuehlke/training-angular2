import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';

export const expenseRoutes: Routes = [
  { path: 'overview', component: ExpenseOverviewComponent }
];

export const expenseRouting: ModuleWithProviders = RouterModule.forChild(expenseRoutes);