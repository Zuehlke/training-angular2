import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense.routing';
import { ExpenseOverviewComponent } from './components/expense-overview.component';

@NgModule({
    imports: [
        CommonModule, 
        ExpenseRoutingModule
    ],
    declarations: [
        ExpenseOverviewComponent,
    ]
})
export class ExpenseModule {
}