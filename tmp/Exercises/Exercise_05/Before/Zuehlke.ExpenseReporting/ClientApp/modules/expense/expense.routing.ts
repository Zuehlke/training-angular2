import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';
import { ExpenseDetailComponent } from './components/expense-detail.component';
import { ExpenseAddComponent } from './components/expense-add.component';

const expenseRoutes: Routes = [
    {
        path: 'expense',
        component: ExpenseOverviewComponent
    }, {
        path: 'expense/:id', 
        component: ExpenseDetailComponent
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