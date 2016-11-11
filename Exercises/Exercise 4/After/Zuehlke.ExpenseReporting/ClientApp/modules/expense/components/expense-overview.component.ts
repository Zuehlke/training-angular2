import { Component, OnInit }  from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Expense } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-overview.component.html'),
})
export class ExpenseOverviewComponent implements OnInit {

    expenses: Expense[];

    constructor(private expenseService: ExpenseService) { }

    ngOnInit(): void {
        this.expenseService.getExpenses()
            .subscribe(expenses => this.expenses = expenses);
    }

    deleteExpense(expense: Expense) : void {
        this.expenseService.deleteExpense(expense)
            .subscribe(() => { this.expenses = this.expenses.filter(exp => exp.id !== expense.id) });
    }
}
