import { Component, OnInit } from '@angular/core';

import { ExpenseRecord } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-overview.component.html'),
    styles: [require('./expense-overview.component.css')]
})
export class ExpenseOverviewComponent implements OnInit {

    expenses: ExpenseRecord[];

    constructor(private expenseService: ExpenseService) { }

    async ngOnInit(): Promise<any> {
        this.expenses = await this.expenseService.getExpenses();
    }

    async deleteExpense(expense: ExpenseRecord): Promise<any> {
        await this.expenseService.deleteExpense(expense);
        this.expenses = this.expenses.filter(exp => exp.id !== expense.id);
    }
}