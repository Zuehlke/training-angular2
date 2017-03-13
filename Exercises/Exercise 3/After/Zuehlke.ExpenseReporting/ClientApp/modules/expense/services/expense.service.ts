import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ExpenseRecord } from '../model/expense';

@Injectable()
export class ExpenseService {

    private expenseUrl = 'api/expenses';

    constructor(private http: Http) {}

    getExpenses(): Promise<ExpenseRecord[]> {
        return this.http.get(this.expenseUrl)
            .map(response => response.json() || [])
            .toPromise();
    }

    deleteExpense(expense: ExpenseRecord): Promise<any> {
        return this.http.delete(`${this.expenseUrl}/${expense.id}`)
            .toPromise();
    }
}
