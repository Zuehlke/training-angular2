import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { expenseRouting } from './expense.routing';
import { ExpenseOverviewComponent } from './components/expense-overview.component';

@NgModule({
  imports: [
      CommonModule, FormsModule, expenseRouting
  ],
  declarations: [
    ExpenseOverviewComponent,
  ]
})
export class ExpenseModule { }

