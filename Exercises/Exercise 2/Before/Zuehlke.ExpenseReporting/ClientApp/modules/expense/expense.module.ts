import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { expenseRouting } from './expense.routing';
import { ExpenseOverviewComponent } from './components/expense-overview.component';

@NgModule({
    imports: [
        CommonModule, 
        expenseRouting
    ],
    declarations: [
        ExpenseOverviewComponent,
    ]
})
export class ExpenseModule {
}