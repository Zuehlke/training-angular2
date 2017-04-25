import { LoginGuard } from './guards/login.guard';
import { FormGuard } from './guards/form.guard';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';
import { ExpenseDetailComponent } from './components/expense-detail.component';
import { ExpenseAddComponent } from './components/expense-add.component';

export const expenseRoutes: Routes = [
    {
        path: 'expense',
        canActivate: [LoginGuard],
        children: [
            { path: '', component: ExpenseOverviewComponent },
            { path: 'add', component: ExpenseAddComponent, canDeactivate: [FormGuard] },
            { path: ':id', component: ExpenseDetailComponent, canDeactivate: [FormGuard] }
        ]
    }
];

export const expenseRouting: ModuleWithProviders = RouterModule.forChild(expenseRoutes);