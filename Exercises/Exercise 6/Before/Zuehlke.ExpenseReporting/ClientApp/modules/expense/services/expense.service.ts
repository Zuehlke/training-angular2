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
            .map(this.mapExpenses)
            .catch(this.handleError);
    }

    getExpense(id: string): Observable<Expense> {
        return this.getExpenses()
            .map((expenses: Expense[]) => expenses.find(p => p.id === id));
    }

    createExpense(expense: Expense): Observable<Response> {
        expense.id = this.generateGuid();
        const dtoExpense = JSON.parse(JSON.stringify(expense));

        return this.http.post(this.expenseUrl, dtoExpense, { headers: this.headers });
    }

    updateExpense(expense: Expense): Observable<Response> {
        const url = `${this.expenseUrl}/${expense.id}`;
  
        const dtoExpense = JSON.parse(JSON.stringify(expense));

        return this.http.put(url, dtoExpense, { headers: this.headers });
    }

    deleteExpense(expense: Expense): Observable<Response> {
        const url = `${this.expenseUrl}/${expense.id}`;

        return this.http.delete(url);
    }

    private mapExpenses(response: Response) : any {
        return response.json() || [];
    }

    private handleError(error: Response) : Observable<any> {
        console.error(error);
        return Observable.throw(error);
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
