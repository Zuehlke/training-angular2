import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { ExpenseRecord } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-detail.component.html')
})
export class ExpenseDetailComponent implements OnInit, OnDestroy {

    expense: ExpenseRecord;
    private sub: Subscription;
    errorMessage: string;

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

    async saveExpense(): Promise<any> {
        try {
            this.expenseService.updateExpense(this.expense);
            this.goBack();
        } catch (response) {
            this.handleError(response);
        }
    }

    private handleError(error: Response) {
        console.error('Error with expense: ' + this.expense, error);
        this.errorMessage = `The remote server returned HTTP ${error.status}: ${error.statusText}`;
    }



}