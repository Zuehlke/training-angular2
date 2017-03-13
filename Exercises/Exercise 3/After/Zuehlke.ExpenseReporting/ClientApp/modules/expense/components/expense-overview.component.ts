import { Component, OnInit } from '@angular/core';

import { ExpenseRecord } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-overview.component.html'),
    styles: [require('./expense-overview.component.css')]
})
export class ExpenseOverviewComponent implements OnInit {

    expenses: ExpenseRecord[];
    errorMessage: string;

    constructor(private expenseService: ExpenseService) {}

    async ngOnInit(): Promise<any> {
        try {
            this.expenses = await this.expenseService.getExpenses();
        } catch (response) {
            this.errorMessage = response.statusText;
        }
    }

    async deleteExpense(expense: ExpenseRecord): Promise<any> {
        try {
            await this.expenseService.deleteExpense(expense);
            this.expenses = this.expenses.filter(exp => exp.id !== expense.id);
        } catch (response) {
            this.handleError(response, expense);
        }
    }

    private handleError(error, expense: ExpenseRecord) {
        console.error('Error deleting expense with id: ' + expense.id);
        this.errorMessage = `The remote server returned HTTP ${error.status}: ${error.statusText}`;
    }
}