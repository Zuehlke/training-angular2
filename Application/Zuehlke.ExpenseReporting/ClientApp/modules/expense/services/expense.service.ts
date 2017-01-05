import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ExpenseRecord } from '../model/expense';

@Injectable()
export class ExpenseService {

    private expenseUrl = 'api/expenses';

    constructor(private http: Http) {}

    getExpenses(): Observable<ExpenseRecord[]> {
        return this.http.get(this.expenseUrl)
            .map(response => response.json() || []);
    }

    getExpense(id: string): Observable<ExpenseRecord> {
        return this.http.get(`${this.expenseUrl}/${id}`)
            .map(response => response.json());
    }

    updateExpense(expense: ExpenseRecord): Observable<Response> {
        return this.http.put(`${this.expenseUrl}/${expense.id}`, expense);
    }

    createExpense(expense: ExpenseRecord): Observable<Response> {
        expense.id = this.generateGuid();
        return this.http.post(this.expenseUrl, expense);
    }

    deleteExpense(expense: ExpenseRecord): Observable<Response> {
        return this.http.delete(`${this.expenseUrl}/${expense.id}`);
    }

    private generateGuid(): string {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    private s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}