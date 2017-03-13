import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
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

    updateExpense(expense: ExpenseRecord): Promise<any> {
        return this.http.put(`${this.expenseUrl}/${expense.id}`, expense)
                        .toPromise();
    }

    createExpense(expense: ExpenseRecord): Promise<any> {
        expense.id = this.generateGuid();
        return this.http.post(this.expenseUrl, expense)
                        .toPromise();
    }

    deleteExpense(expense: ExpenseRecord): Promise<any> {
        return this.http.delete(`${this.expenseUrl}/${expense.id}`)
                        .toPromise();
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