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

    getExpense(id: string): Promise<ExpenseRecord> {
        return this.http.get(`${this.expenseUrl}/${id}`)
                        .map(response => response.json())
                        .toPromise();
    }

    updateExpense(expense: ExpenseRecord): Promise<Response> {
        return this.http.put(`${this.expenseUrl}/${expense.id}`, expense)
                        .toPromise();
    }

    deleteExpense(expense: ExpenseRecord): Promise<Response> {
        return this.http.delete(`${this.expenseUrl}/${expense.id}`)
                        .toPromise();
    }
	
	private generateGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
        });
    }
}