import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ExpenseRecord, ExpenseReason } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-add.component.html')
})
export class ExpenseAddComponent {

    expense: ExpenseRecord = new ExpenseRecord("", "", ExpenseReason.Flight, new Date(Date.now()), 0, "");
    errorMessage: string;

    constructor(private router: Router, private expenseService: ExpenseService) {}

    async createExpense(): Promise<any> {
        try {
            await this.expenseService.createExpense(this.expense);
            this.goBack();
        } catch(response){
             this.handleError(response) ;
        }
    }

    goBack(): void {
        this.router.navigate(['/expense']);
    }

    private handleError(response: Response): void {
        this.errorMessage = `The remote server returned HTTP ${response.status}: ${response.statusText}`;
    }
}