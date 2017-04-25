import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { ExpenseRecord } from '../model/expense';
import { ExpenseService } from '../services/expense.service';
import { IExpenseDetail } from './expense-detail.interface';

@Component({
    template: require('./expense-detail.component.html')
})
export class ExpenseDetailComponent implements OnInit, OnDestroy, IExpenseDetail {

    expense: ExpenseRecord;
    private sub: Subscription;
    errorMessage: string;

    isFormValidOrPristine: boolean;

    constructor(private route: ActivatedRoute, private router: Router, private expenseService: ExpenseService) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                const id = params['id'];
                this.getExpense(id);
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    async saveExpense(): Promise<any> {
        if (!this.isFormValidOrPristine) {
            return Promise.resolve();
        }
        try {
            await this.expenseService.updateExpense(this.expense);
            this.goBack();
        } catch (response) {
            this.handleError(response);
        }
    }

    goBack(): void {
        this.router.navigate(['/expense']);
    }

    private async getExpense(id: string): Promise<any> {
        try {
            this.expense = await this.expenseService.getExpense(id);
        } catch (response) {
            this.handleError(response);
        }
    }

    private handleError(response: Response): void {
        this.errorMessage = `The remote server returned HTTP ${response.status}: ${response.statusText}`;
    }
}