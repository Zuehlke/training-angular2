import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ExpenseOverviewComponent } from './components/expense-overview.component';

const expenseRoutes: Routes = [
    {
        path: 'expense',
        component: ExpenseOverviewComponent
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