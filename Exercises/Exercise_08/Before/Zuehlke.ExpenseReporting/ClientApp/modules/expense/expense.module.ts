import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense.routing';
import { ExpenseOverviewComponent } from './components/expense-overview.component';
import { ExpenseDetailComponent } from './components/expense-detail.component';
import { ExpenseAddComponent } from './components/expense-add.component';
import { ExpenseFormComponent } from './components/expense-form.component';
import { ExpenseFilterPipe } from './pipes/expense-filter.pipe';
import { ExpenseService } from './services/expense.service';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ExpenseRoutingModule
    ],
    declarations: [
        ExpenseOverviewComponent,
        ExpenseDetailComponent,
        ExpenseFormComponent,
        ExpenseAddComponent,
        ExpenseFilterPipe
    ],
    providers: [
        ExpenseService
    ]
})
export class ExpenseModule {
}