import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ExpenseRecord } from '../model/expense';
import { ExpenseService } from '../services/expense.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Component({
    template: require('./expense-add.component.html')
})
export class ExpenseAddComponent {

    expense: ExpenseRecord = new ExpenseRecord(null, null, null, new Date(Date.now()), 0, null);
    errorMessage: string;

    constructor(private router: Router, private expenseService: ExpenseService) {}

   goBack(): void {
        this.router.navigate(['/expense']);
    }

    private handleError(error: Response): Observable<Response> {
        console.error('Error with expense: ' + this.expense, error);
        this.errorMessage = `The remote server returned HTTP ${error.status}: ${error.statusText}`;
        return Observable.throw(error);
    }
}