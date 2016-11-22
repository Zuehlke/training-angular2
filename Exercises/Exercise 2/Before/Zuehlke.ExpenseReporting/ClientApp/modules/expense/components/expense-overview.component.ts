import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExpenseService }  from '../services/expense.service';
import { Expense }  from '../model/expense';

@Component({
    template: require('./expense-overview.component.html'),
})
export class ExpenseOverviewComponent implements OnInit{

    public expenses: Expense[];

    constructor(private expenseService: ExpenseService) {
    }

    ngOnInit(): void {
        this.expenseService.getExpenses()
            .subscribe(exp => this.expenses = exp);
    }
};