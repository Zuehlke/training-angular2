import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { expenseRouting } from './expense.routing';
import { ExpenseOverviewComponent } from './components/expense-overview.component';
import { ExpenseDetailComponent } from './components/expense-detail.component';
import { ExpenseFormComponent } from './components/expense-form.component';
import { ExpenseFilterPipe } from './pipes/expense-filter.pipe';
import { ExpenseService } from './services/expense.service';

@NgModule({
  imports: [
      FormsModule, CommonModule, expenseRouting
  ],
  declarations: [
    ExpenseOverviewComponent,
    ExpenseDetailComponent,
    ExpenseFormComponent,
    ExpenseFilterPipe
  ],
  providers: [
    ExpenseService
  ]
})
export class ExpenseModule { }

