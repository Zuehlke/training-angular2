import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Expense } from '../model/expense';

@Injectable()
export class ExpenseService {

    private expenseUrl = 'api/expenses';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getExpenses(): Observable<Expense[]> {
        return this.http.get(this.expenseUrl)
            .map(response => this.mapExpenses(response))
            .catch(this.handleError);
    }

    deleteExpense(expense: Expense): Observable<Response> {
        const url = `${this.expenseUrl}/${expense.id}`;

        return this.http.delete(url, { headers: this.headers, body: "" });
    }

    private mapExpenses(response: Response): any {
        const mappedExpenses = response.json() || [];
        mappedExpenses.forEach((expense: Expense) => {
            expense.date = this.sanitizeDate(expense.date);
        });

        return mappedExpenses;
    }

    private sanitizeDate(rawDate: string): string {
        const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        const dateArray: any = rawDate.split(".");
        const theDate = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
        const finalDate = new Date(theDate.getTime() - tzoffset);
        return finalDate.toISOString().slice(0, 10);
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error);
    }

}
