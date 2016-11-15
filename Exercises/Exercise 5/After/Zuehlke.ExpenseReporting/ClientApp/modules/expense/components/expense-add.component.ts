import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Expense } from '../model/expense';
import { ExpenseService } from '../services/expense.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Component({
    template: require('./expense-add.component.html')
})
export class ExpenseAddComponent {

    expense: Expense = new Expense(null, null, null, null, 0, null);
    errorMessage: string;

    constructor(private router: Router, private expenseService: ExpenseService) { }

    createExpense(): void {
        this.expenseService.createExpense(this.expense)
            .subscribe(() => { this.goBack() }, error => { this.handleError(error) });
    }

    goBack(): void {
        this.router.navigate(['/overview']);
    }

    private handleError(error: Response): Observable<Response> {
        console.error('Error with expense: ' + this.expense, error);
        this.errorMessage = `The remote server returned HTTP ${error.status}: ${error.statusText}`;
        return Observable.throw(error);
    }
}