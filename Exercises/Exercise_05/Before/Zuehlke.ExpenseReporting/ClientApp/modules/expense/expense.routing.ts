import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';
import { ExpenseDetailComponent } from './components/expense-detail.component';
import { ExpenseAddComponent } from './components/expense-add.component';

export const expenseRoutes: Routes = [
    {
        path: 'expense',
        children: [
            { path: '', component: ExpenseOverviewComponent },
            { path: ':id', component: ExpenseDetailComponent }
        ]
    }
];

export const expenseRouting: ModuleWithProviders = RouterModule.forChild(expenseRoutes);