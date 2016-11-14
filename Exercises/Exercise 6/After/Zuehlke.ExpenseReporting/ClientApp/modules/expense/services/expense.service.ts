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

    constructor(private http: Http) { }

    getExpenses(): Observable<Expense[]> {
        return this.http.get(this.expenseUrl)
            .map(response => response.json() || []);
    }

    getExpense(id: string): Observable<Expense> {
        return this.getExpenses()
            .map((expenses: Expense[]) => expenses.find(p => p.id === id));
    }

    createExpense(expense: Expense): Observable<Response> {
        expense.id = this.generateGuid();

        return this.http.post(this.expenseUrl, expense);
    }

    updateExpense(expense: Expense): Observable<Response> {
        const url = `${this.expenseUrl}/${expense.id}`;

        return this.http.put(url, expense);
    }

    deleteExpense(expense: Expense): Observable<Response> {
        const url = `${this.expenseUrl}/${expense.id}`;

        return this.http.delete(url);
    }

    private generateGuid() : string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    private s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

}
