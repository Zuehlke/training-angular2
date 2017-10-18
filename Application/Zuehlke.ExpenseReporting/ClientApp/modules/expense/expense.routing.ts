import { NgModule } from '@angular/core';
import { LoginGuard } from './guards/login.guard';
import { FormGuard } from './guards/form.guard';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';
import { ExpenseDetailComponent } from './components/expense-detail.component';
import { ExpenseAddComponent } from './components/expense-add.component';

const expenseRoutes: Routes = [
    {
        path: 'expense',
        component: ExpenseOverviewComponent,
        canActivate: [LoginGuard]
    }, {
        path: 'expense/add', 
        component: ExpenseAddComponent, 
        canActivate: [LoginGuard],
        canDeactivate: [FormGuard]
    }, {
        path: 'expense/:id', 
        component: ExpenseDetailComponent, 
        canActivate: [LoginGuard],
        canDeactivate: [FormGuard]
    }
];
   
@NgModule({
    imports: [
        RouterModule.forChild(expenseRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExpenseRoutingModule { }