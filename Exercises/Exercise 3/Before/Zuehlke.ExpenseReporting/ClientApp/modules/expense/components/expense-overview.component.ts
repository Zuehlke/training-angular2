import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExpenseRecord } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-overview.component.html'),
})
export class ExpenseOverviewComponent implements OnInit {

    expenses: ExpenseRecord[];

    constructor(private expenseService: ExpenseService) {}

    ngOnInit(): void {
        this.expenseService.getExpenses()
            .subscribe(expenses => this.expenses = expenses);
    }
}