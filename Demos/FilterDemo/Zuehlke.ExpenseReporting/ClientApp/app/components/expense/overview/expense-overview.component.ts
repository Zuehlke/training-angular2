﻿import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Expense } from '../model/expense';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
    template: require('./expense-overview.component.html'),
    styles: [require('./expense-overview.component.css')]
})
export class ExpenseOverviewComponent implements OnInit {

    expenses: Expense[];

    constructor(private http: Http) { }

    ngOnInit(): void {
        this.getExpenses()
            .subscribe(result => this.expenses = result, error => { this.handleError(error) });
    }

    getExpenses(): Observable<Expense[]> {
        return this.http.get('api/expenses')
            .map(response => this.mapExpenses(response))
            .catch(error => this.handleError(error));
    }

    private mapExpenses(response: Response): any {
        const mappedExpenses = response.json() || [];
        console.info('loaded ' + mappedExpenses.length + ' expense records from database');
        return mappedExpenses;
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error);
    }

}