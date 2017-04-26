import { NotificationService } from './../../app/services/notification.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ExpenseRecord } from '../model/expense';

@Injectable()
export class ExpenseService {

    private expenseUrl = 'api/expenses';

    constructor(private http: Http, private notify: NotificationService) { }

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

    async updateExpense(expense: ExpenseRecord): Promise<Response> {
        var result: Response;
        try {
            result = await this.http
                .put(`${this.expenseUrl}/${expense.id}`, expense)
                .toPromise();
            this.notify.success(`Expense ${expense.id} updated successfully.`);
        } catch (response) {
            this.handleError(`Error updating expense ${expense.id}.`, response);
        }
        return result;
    }

    async createExpense(expense: ExpenseRecord): Promise<Response> {
        var result: Response;
        try {
            expense.id = this.generateGuid();
            result = await this.http
                .post(this.expenseUrl, expense)
                .toPromise();
            this.notify.success(`Expense ${expense.id} created successfully.`);
        } catch (response) {
            if (response.status === 409) {
                this.notify.warning(`An expense with id ${expense.id} already exists.`);
            } else {
                this.handleError(`Error creating expense ${expense.id}.`, response);
            }
            result = response;
        }
        return result;
    }

    async deleteExpense(expense: ExpenseRecord): Promise<Response> {
        var result: Response;
        try {
            result = await this.http
                .delete(`${this.expenseUrl}/${expense.id}`)
                .toPromise();
            this.notify.success(`Expense ${expense.id} deleted successfully.`);
        } catch (response) {
            this.handleError(`Error deleting expense ${expense.id}.`, response);
            result = response;
        }
        return result;
    }

    private handleError(message: string, response: Response) {
        this.notify.error(`${message}: The remote server returned HTTP ${response.status}: ${response.statusText}`);
    }

    private generateGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}