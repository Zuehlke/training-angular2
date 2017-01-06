import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExpenseRecord } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-overview.component.html'),
})
export class ExpenseOverviewComponent implements OnInit {

    expenses: ExpenseRecord[];
    errorMessage: string;

    constructor(private expenseService: ExpenseService) {}

    ngOnInit(): void {
        this.expenseService.getExpenses()
            .subscribe(expenses => this.expenses = expenses, error => this.errorMessage = error);
    }

    deleteExpense(expense: ExpenseRecord): void {
        this.expenseService.deleteExpense(expense)
            .subscribe(() => { this.expenses = this.expenses.filter(exp => exp.id !== expense.id) },
                error => { this.handleError(error, expense) });
    }

    private handleError(error, expense: ExpenseRecord): Observable<any> {
        console.error('Error deleting expense with id: ' + expense.id);
        this.errorMessage = `The remote server returned HTTP ${error.status}: ${error.statusText}`;
        return Observable.throw(error);
    }
}