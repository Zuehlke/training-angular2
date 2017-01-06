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


    deleteExpense(expense: ExpenseRecord): Observable<Response> {
        return this.http.delete(`${this.expenseUrl}/${expense.id}`);
    }
}
