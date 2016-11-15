import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { Expense } from '../model/expense';
import { ExpenseService } from '../services/expense.service';

@Component({
    template: require('./expense-detail.component.html')
})
export class ExpenseDetailComponent implements OnInit, OnDestroy {

    expense: Expense;
    private sub: Subscription;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private expenseService: ExpenseService) {}

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
        this.router.navigate(['/overview']);
    }

    private getExpense(id: string): void {
        this.expenseService.getExpense(id)
            .subscribe(expense => this.expense = expense, error => {this.handleError(error)});
    }

    private handleError(error: Response): Observable<Response> {
        console.error('Error with expense: ' + this.expense, error);
        this.errorMessage = `The remote server returned HTTP ${error.status}: ${error.statusText}`;
        return Observable.throw(error);
    }

}