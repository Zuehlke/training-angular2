import { IExpenseDetail } from './expense-detail.interface';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ExpenseRecord, ExpenseReason } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-add.component.html')
})
export class ExpenseAddComponent implements IExpenseDetail {

    expense: ExpenseRecord = new ExpenseRecord("", "", ExpenseReason.Flight, new Date(Date.now()), 0, "");

    isFormValidOrPristine: boolean;

    constructor(private router: Router, private expenseService: ExpenseService) { }

    async createExpense(): Promise<any> {
        await this.expenseService.createExpense(this.expense);
        this.goBack();
    }

    goBack(): void {
        this.router.navigate(['/expense']);
    }
}